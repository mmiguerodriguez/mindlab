const NAMESPACE = 'SlideHelper';

class SlideHelper {
  /**
   * Public Functions
   * */
  /**
   * Creates an instance and sets the corresponding values with the passed parameters
   * @param {float} $element The element on which to use the helper
   * @param {float} size The size of the element
   * @param {float} frictionAcceleration Used to determine if upon release the element should exit
   * @param {float} returnVelocity  Sets the speed with which the state returns to rest position
   * @param {float} stateUpdateHandler Called every frame with the state, used by user to animate
   * @param {float} finishHandler Called when the state reaches passed size
   * @param {float} rightHandler Called when the state reaches passed size, on the right
   * @param {float} leftHandler Called when the state reaches passed size, on the left
   * @return {SlideHelper}
   */
  constructor({
    $element,
    size,
    frictionAcceleration = -7,
    returnVelocity = 80,
    stateUpdateHandler = null,
    finishHandler = null,
    rightHandler = null,
    leftHandler = null,
  }) {
    if (this.$element) {
      console.error('Applying while already applied to another element!');
    }
    if (!$element) {
      console.error('Did not pass element');
    }
    if (!size) {
      console.error('Did not pass size');
    }

    this.$body = $(document.body);
    this.pressed = false;// The element is being pressed
    this.shouldReturn = false;// The state should return to rest position
    this.shouldExit = false;// The state should continue to exit (when element is released)
    this.pointerX = null;// Last pointer position
    this.pointerY = null;// Last pointer position
    this.lastPointerPositionTimestamp = 0;// The timestamp of the last pointer position recorded
    this.pressX = null;// Last touch position
    this.pressY = null;// Last touch position
    this.$element = $element;
    this.size = size;
    this.returnVelocity = returnVelocity;
    this.frictionAcceleration = frictionAcceleration;
    this.stateUpdateHandler = stateUpdateHandler;
    this.finishHandler = finishHandler;
    this.rightHandler = rightHandler;
    this.leftHandler = leftHandler;

    // The current position of movement
    this.stateX = 0;// i.e. element pressed then pointer moved to the right, stateX increases
    this.velocityX = 0;

    SlideHelper.addTouchEvents(this.$element, this.press.bind(this));


    // The animation frame calls the animation frame handler and deals with setting the state upon
    // touch release.
    window.requestAnimationFrame(this.animationFrame.bind(this));
  }

  /**
   * Sets the friction, which is used to calculate if the
   *  element would exit after a swipe. The default friction value is -7
   * @param {float} frictionAcceleration the new friction value
   * @return {undefined}
   */
  setFrictionAcceleration(frictionAcceleration) {
    this.frictionAcceleration = -Math.abs(frictionAcceleration);
  }

  /**
   * Sets the velocity with which a released element will return to rest state,
   *  if it should return element would exit after a swipe. The default returnVelocity value is 80
   * @param {float} returnVelocity the new returnVelocity value
   * @return {undefined}
   */
  setReturnVelocity(returnVelocity) {
    this.returnVelocity = Math.abs(returnVelocity);
  }

  /**
   * Sets the size, which is used to calculate stateX
   * @param {float} size the new size value
   * @return {undefined}
   */
  setSize(size) {
    this.size = size;
  }

  /**
   * Private Functions
   * */
  /**
   * disable disables the helper. called when the state reaches the limit
   * @return {undefined}
   */
  disable() {
    SlideHelper.removeTouchEvents(this.$element);
    this.$element = null;

    this.pressed = false;
    this.shouldExit = false;
    this.shouldReturn = false;
  }

  /**
   * Called when the pointer moves, and updates the corresponding variables
   * @param {object} data jquery event data object
   * @return {undefined}
   */
  pointerMoved(data) {
    // Get the position of the pointer
    let x;
    let y;
    // If not mobile the position is stored in screenX and screenY
    if (data.screenX) {
      x = data.screenX;
      y = data.screenY;
    }
    // If mobile the position of the touch is stored in a list of touches (may be many fingers)
    if (data.touches && data.touches.item(0).screenX) {
      x = data.touches.item(0).screenX;
      y = data.touches.item(0).screenY;
    }

    // Velocity = distance/time
    this.velocityX = (x - this.pointerX) /
     ((performance.now() - this.lastPointerPositionTimestamp) / 100);
    // Save pointer position
    this.pointerX = x;
    this.pointerY = y;
    this.lastPointerPositionTimestamp = performance.now();

    // Update the state
    this.stateX = (this.pointerX - this.pressX) / this.size;
  }

  /**
   * Called when the pointer clicks or touches the screen, and updates the corresponding
   *  variables
   * @param {object} data jquery event data object
   * @return {undefined}
   */
  press(data) {
    // Get the position of the pointer
    let x;
    let y;
    // If not mobile the position is stored in screenX and screenY
    if (data.screenX) {
      x = data.screenX;
      y = data.screenY;
    }
    // If mobile the position of the touch is stored in a list of touches (may be many fingers)
    if (data.touches && data.touches.item(0).screenX) {
      x = data.touches.item(0).screenX;
      y = data.touches.item(0).screenY;
    }

    // Save pointer position
    this.pressX = x;
    this.pressY = y;

    // Update current conditions
    this.pressed = true;
    this.shouldExit = false;
    this.shouldReturn = false;

    // Because the element was pressed, start listening for a release and a move
    SlideHelper.addTouchEvents(
      this.$body, null, this.release.bind(this), this.pointerMoved.bind(this));
  }

  /**
   * Called when the pointer release or a finger leaves the screen, and updates the
   *  corresponding variables. Does not accept the jquery event object because not used.
   *  @return {undefined}
   */
  release() {
    // Check for a buggy release (a release when the element was not actually being touched)
    if (!this.pressed) {
      return;
    }

    this.pressed = false;

    /**
     * Determinar si se deberia pasar a la siguiente tarjeta o volver
     * CUIDADO: Matematica
     * */
    const timeToStop = -this.velocityX / this.frictionAcceleration;
    const finalPositionX = (this.stateX * this.size) +
      (this.velocityX * timeToStop) +
        ((this.frictionAcceleration * timeToStop * timeToStop) / 2);
    if (Math.abs(finalPositionX) > 500) {
      // The state would reach the limit, therefore it should continue to the exit
      // (shouldExit = true)
      this.shouldReturn = false;
      this.shouldExit = true;
    } else {
      // The state would not reach the limit, therefore it should return to rest position
      // (shouldReturn = true)
      this.shouldReturn = true;
      this.shouldExit = false;
    }

    // Because the element was released, stop listening for a release and a move (will only detach
    // release and move because press is atached to the element, not the body)
    SlideHelper.removeTouchEvents(this.$body);
  }
  // Called every frame to update everything
  /**
   * Called every frame. Updates state variables and calls handlers. Disables if reached limit.
   * @return {undefined}
   */
  animationFrame() {
    if (Math.abs(this.stateX) >= 1) {
      // Reached the limit, disable the helper and call corresponding handlers
      this.disable();
      if (this.finishHandler) {
        this.finishHandler();
      }
      if (this.leftHandler && this.stateX <= -1) {
        this.leftHandler();
      }
      if (this.rightHandler && this.stateX >= 1) {
        this.rightHandler();
      }
      return;
    }

    if (this.shouldReturn) {
      // Because the state should return to rest position, move to rest position a bit every frame
      const positionDisplacement =
       this.returnVelocity / this.size;// The distance that will be moved this frame
      // Move
      if (this.stateX > positionDisplacement) {
        this.stateX -= positionDisplacement;
      } else if (this.stateX < -positionDisplacement) {
        this.stateX += positionDisplacement;
      } else {
        // If closer to rest position than the move distance, directly set rest position
        this.stateX = 0;
      }
    }

    if (this.shouldExit) {
      // Because the state should reach the limit (exit), move outside according to velocity
      const positionDisplacement = this.velocityX / this.size;
      this.stateX += positionDisplacement;
    }

    // Call handler if an stateUpdateHandler was supplied
    if (this.stateUpdateHandler) {
      this.stateUpdateHandler(this.stateX);
    }

    // Call this function once per frame
    window.requestAnimationFrame(this.animationFrame.bind(this));
  }

  /**
   * Adds the passed event handlers to the passed element
   * @param {object} $element jquery element
   * @param {function} pressHandler touchstart and mousedown event handlers
   * @param {function} releaseHandler touchend and mouseup event handlers
   * @param {function} moveHandler touchmove and mousemove event handlers
   * @return {undefined}
   */
  static addTouchEvents($element, pressHandler, releaseHandler, moveHandler) {
    $element.on(`touchstart.${NAMESPACE}`, pressHandler);
    $element.on(`mousedown.${NAMESPACE}`, pressHandler);

    $element.on(`touchend.${NAMESPACE}`, releaseHandler);
    $element.on(`mouseup.${NAMESPACE}`, releaseHandler);

    $element.on(`touchmove.${NAMESPACE}`, moveHandler);
    $element.on(`mousemove.${NAMESPACE}`, moveHandler);
  }

  /**
   * Removes events to the passed element
   * @param {object} $element jquery element
   * @return {undefined}
   */
  static removeTouchEvents($element) {
    $element.off(`.${NAMESPACE}`);
  }
}

export default SlideHelper;

/* global $ */
