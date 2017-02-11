const NAMESPACE = 'SlideHelper';

class SlideHelper {
  /**
   * Public Functions
   * */
  /**
   * Creates an instance and sets the corresponding values with the passed parameters
   * @param {float} $element The element on which to use the helper
   * @param {float} size The size of the element
   * @param {float} exitThreshold
   * The distance from the center that, if reached, the element will exit when released
   * @param {float} exitThresholdSpeed The speed at which exit if the element reaches the threshold
   * @param {float} escapeThreshold
   * The normalized distance from the tap needed to initialize the animation
   * @param {float} velocityModifier
   * A modifier for the velocity, because finger movement is perceibed as slower
   * @param {float} frictionAcceleration Used to determine if upon release the element should exit
   * @param {float} returnSpeed  Sets the speed with which the state returns to rest position
   * @param {function} stateUpdateHandler Called every frame with the state, used by user to animate
   * @param {function} finishHandler Called when the state reaches passed size
   * @param {function} rightHandler Called when the state reaches passed size, on the right
   * @param {function} leftHandler Called when the state reaches passed size, on the left
   * @param {function} downHandler
   * Called when tap hasn't passed the escape threshold but has passed the down threshold
   * @param {float} disableRight Does not slide to the right (more than initially)
   * @param {float} disableLeft Does not slide to the left (more than initially)
   * @return {SlideHelper}
   */
  constructor({
    $element,
    size,
    exitThreshold,
    exitThresholdSpeed,
    escapeThreshold = 0,
    velocityModifier = 10,
    frictionAcceleration = -7,
    returnSpeed = 80,
    stateUpdateHandler = null,
    finishHandler = null,
    rightHandler = null,
    leftHandler = null,
    downHandler = null,
    disableLeft = false,
    disableRight = false,
  }) {
    if (!$element) {
      console.error('Did not pass the element on which to apply the helper!');
    }
    if (!size) {
      console.error('Did not pass the size of the element on which to apply the helper!');
    }
    if (Number.isFinite(exitThreshold) && !Number.isFinite(exitThresholdSpeed)) {
      console.error('Indicated an exitThreshold but didn\'t pass the exit velocity');
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
    this.exitThreshold = Number.isFinite(exitThreshold) ? Math.abs(exitThreshold) : size;
    this.exitThresholdSpeed = Number.isFinite(exitThresholdSpeed) ? exitThresholdSpeed : 0;
    this.escapeThreshold = escapeThreshold;
    this.hasEscaped = false;
    this.velocityModifier = velocityModifier;
    this.returnSpeed = returnSpeed;
    this.frictionAcceleration = frictionAcceleration;
    this.allowLeft = !disableLeft; // Should move more to the left than initial position ?
    this.allowRight = !disableRight; // Should move more to the right than initial position ?
    this.stateUpdateHandler = stateUpdateHandler;
    this.finishHandler = finishHandler;
    this.rightHandler = rightHandler;
    this.leftHandler = leftHandler;
    this.downHandler = downHandler;

    // The current position of movement
    this.stateX = 0;// i.e. element pressed then pointer moved to the right, stateX increases
    // normalized y component of the distance between
    // current tap position and initial tap position
    this.stateY = 0;
    this.velocityX = 0;
    this.exitVelocity = 0;// Used when exiting

    // Bind the event handlers
    this.pointerMoved = this.pointerMoved.bind(this);
    this.press = this.press.bind(this);
    this.release = this.release.bind(this);
    this.animationFrame = this.animationFrame.bind(this);

    SlideHelper.addTouchEvents(this.$element, this.press);

    // The animation frame calls the animation frame handler and deals with setting the state upon
    // touch release.
    window.requestAnimationFrame(this.animationFrame);

    this.enabled = true;
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
   *  if it should return. The default returnSpeed value is 80
   * @param {float} returnSpeed the new returnSpeed value
   * @return {undefined}
   */
  setReturnSpeed(returnSpeed) {
    this.returnSpeed = Math.abs(returnSpeed);
  }

  /**
   * Sets the size, which is used to calculate stateX & stateY
   * @param {float} size the new size value
   * @return {undefined}
   */
  setSize(size) {
    this.size = size;
  }

  /**
   * Sets the exitThreshold, an optional parameter used to set an exit threshold
   * @param {float} exitThreshold the new exitThreshold value
   * @return {undefined}
   */
  setExitThreshold(exitThreshold) {
    this.exitThreshold = exitThreshold;
  }

  /**
   * Sets the exitThresholdSpeed, used when exiting because of the exit threshold
   * @param {float} exitThresholdSpeed the new exitThresholdSpeed value
   * @return {undefined}
   */
  setExitThresholdSpeed(exitThresholdSpeed) {
    this.exitThresholdSpeed = exitThresholdSpeed;
  }

  /**
   * Private Functions
   * */
  /**
   * Disables the helper. Automatically called when the state reaches the limit.
   * If called externally, completely halts execution.
   * @return {undefined}
   */
  disable() {
    if (!this.enabled) {
      return;
    }
    SlideHelper.removeTouchEvents(this.$element);
    this.$element = null;

    this.pressed = false;
    this.shouldExit = false;
    this.shouldReturn = false;

    this.enabled = false;
  }

  /**
   * Called when the pointer moves, and updates the corresponding variables
   * @param {object} event jquery event object
   * @return {undefined}
   */
  pointerMoved(event) {
    // slide helper should not do anything else than intended
    event.preventDefault();
    // Get the position of the pointer
    const { x, y } = SlideHelper.getPointerEventPosition(event);

    // Velocity = distance/time
    this.velocityX = ((x - this.pointerX) /
     ((performance.now() - this.lastPointerPositionTimestamp) / 1000)) / this.velocityModifier;
    // Save pointer position
    this.pointerX = x;
    this.pointerY = y;
    this.lastPointerPositionTimestamp = performance.now();

    // Update the state
    this.stateX = (this.pointerX - this.pressX) / this.size;
    this.stateY = (this.pointerY - this.pressY) / this.size;

    // If movement in one direction is disabled, disable
    if ((!this.allowLeft && this.stateX < 0) || (!this.allowRight && this.stateX > 0)) {
      this.stateX = 0;
    }
  }

  /**
   * Called when the pointer clicks or touches the screen, and updates the corresponding
   *  variables
   * @param {object} event jquery event object
   * @return {undefined}
   */
  press(event) {
    // slide helper should not do anything else than intended
    event.preventDefault();
    // Get the position of the pointer
    const { x, y } = SlideHelper.getPointerEventPosition(event);

    // Save pointer position
    this.pressX = x;
    this.pressY = y;

    // Update current conditions
    this.pressed = true;
    this.shouldExit = false;
    this.shouldReturn = false;

    // Because the element was pressed, start listening for a release and a move
    SlideHelper.addTouchEvents(
      this.$body, null, this.release, this.pointerMoved);
  }

  /**
   * Called when the pointer release or a finger leaves the screen, and updates the
   *  corresponding variables. Does not accept the jquery event object because not used.
   *  @param {event} event jquery event object
   *  @return {undefined}
   */
  release(event) {
    // slide helper should not do anything else than intended
    event.preventDefault();
    // Check for a buggy release (a release when the element was not actually being touched)
    if (!this.pressed) {
      return;
    }

    this.pressed = false;

    /**
     * Determine if should exit or return
     * BEWARE: Maths ahead
     * */
    const timeToStop = Math.abs(this.velocityX / this.frictionAcceleration);

    // if the velocity is negative, the frictionAcceleration should
    //  be positive (friction is against movement)
    let finalPositionX;
    if (this.velocityX > 0) {
      finalPositionX = (this.stateX * this.size) +
        (this.velocityX * timeToStop) +
          ((this.frictionAcceleration * timeToStop * timeToStop) / 2);
    } else {
      finalPositionX = (this.stateX * this.size) +
        (this.velocityX * timeToStop) +
          ((-this.frictionAcceleration * timeToStop * timeToStop) / 2);
    }

    if ((finalPositionX < 0 && !this.allowLeft) || (finalPositionX > 0 && !this.allowRight)) {
      finalPositionX = 0;
    }

    if (Math.abs(finalPositionX) > this.size) {
      // The state would reach the limit, therefore it should continue to the exit
      // (shouldExit = true)

      this.shouldReturn = false;
      this.shouldExit = true;
      // Sets the exitVelocity to the maximum between exitThresholdSpeed and velocityX,
      //  to avoid super slow movement
      this.exitVelocity = Number.isFinite(this.exitThreshold) ?
       Math.sign(this.velocityX) * Math.max(Math.abs(this.velocityX), this.exitThresholdSpeed) :
        this.velocityX;
    } else if (Math.abs(this.stateX) * this.size > this.exitThreshold) {
      // The exit threshold was reached, therefore state should exit
      // (shouldExit = true)

      this.shouldReturn = false;
      this.shouldExit = true;
      this.exitVelocity = Math.sign(this.stateX) * this.exitThresholdSpeed;
    } else if ( // the state hasn't reached the limit
      this.downHandler &&
      !this.hasEscaped &&
      this.stateY > 0.25 // check if there is a down swipe TODO: make stateY size.y dependent
    ) {
      // call downHandler
      this.downHandler();
    } else {
      // It should return to rest position
      this.shouldReturn = true;
      this.shouldExit = false;
    }

    // Because the element was released, stop listening for a release and a move (will only detach
    // release and move because press is atached to the element, not the body)
    SlideHelper.removeTouchEvents(this.$body);
  }

  /**
   * Called every frame. Updates state variables and calls handlers. Disables if reached limit.
   * @return {undefined}
   */
  animationFrame() {
    if (!this.enabled) {
      return;
    }
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
      // Reset hasEscaped variable for the next touch
      this.hasEscaped = false;
      // Because the state should return to rest position, move to rest position a bit every frame
      const positionDisplacement =
       this.returnSpeed / this.size;// The distance that will be moved this frame

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
      const positionDisplacement = this.exitVelocity / this.size;
      this.stateX += positionDisplacement;
    }

    // Call handler if an stateUpdateHandler was supplied and if the card has
    // already passed the escape threshold
    if (this.stateUpdateHandler &&
      (
        Math.abs(this.stateX) > this.escapeThreshold ||
        this.hasEscaped ||
        this.shouldReturn ||
        this.shouldExit
      )
    ) {
      if (!this.shouldReturn) {
        this.hasEscaped = true;
      }
      this.stateUpdateHandler(this.stateX);
    }

    // Call this function once per frame
    window.requestAnimationFrame(this.animationFrame);
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

  /**
   * Returns the screen's position where a pointer event ocurred
   * @param {object} data jQuery Event data
   * @return {object} The position object.
   *   {Integer} x
   *   {Integer} y
   */
  static getPointerEventPosition(data) {
    let x;
    let y;
    let ret;
    // If not mobile the position is stored in screenX and screenY
    if (Number.isFinite(data.screenX)) {
      x = data.screenX;
      y = data.screenY;
    } else if (data.touches && data.touches.length > 0 &&
       Number.isFinite(data.touches.item(0).screenX)) {
      // If mobile the position of the touch is stored in a list of touches (may be many fingers)
      x = data.touches.item(0).screenX;
      y = data.touches.item(0).screenY;
    } else if (data.originalEvent) {
      ret = SlideHelper.getPointerEventPosition(data.originalEvent);
    }

    return ret || { x, y };
  }
}

export default SlideHelper;
