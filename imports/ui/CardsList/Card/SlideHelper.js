/**
 * TODO:
 *  Documentar bien metodos con docblockr y variables no intuitivas como stateX
 * */

/**
 * - slideHelper($element, size, animationFrameHandler, finishOrRightHandler, leftHandler)
 *    Apply the helper to an element. Supply the size of the element, and the handlers to be called
 *     when it reaches the end. You can either have finish handler or right and left handler,
 *   not both.
 * - setFrictionAcceleration(frictionAcceleration)
 *    Set the friction. The friction is used to determine if the element would exit or stay, when
 *     the user releases it.
 * - setReturnVelocity(returnVelocity)
 *    Set the return velocity for when the element is released and should return to rest position.
 *     (The exit velocity is determined by the touch's movement)
 * */
import $ from 'jquery';

/**
 * Variables
 * */
const NAMESPACE = 'SlideHelper';

class SlideHelper {
  /**
   * Public Functions
   * */
  constructor({
    $element, 
    size, 
    frictionAcceleration = -7, 
    returnVelocity = 80, 
    animationFrameHandler = null, 
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
    this.pressed = false;
    this.shouldReturn = false;
    this.shouldExit = false;
    this.pointerX = null;
    this.pointerY = null;
    this.lastPointerPositionTimestamp = 0;
    this.pressX = null;
    this.pressY = null;
    this.$element = $element;
    this.size = size;
    this.returnVelocity = returnVelocity;
    this.frictionAcceleration = frictionAcceleration;
    this.animationFrameHandler = animationFrameHandler;
    this.finishHandler = finishHandler;
    this.rightHandler = rightHandler;
    this.leftHandler = leftHandler;

    this.stateX = 0;
    this.velocityX = 0;
    
    this.addTouchEvents(this.$element, this.press.bind(this));


    // The animation frame calls the animation frame handler and deals with setting the state upon
    // touch release.
    window.requestAnimationFrame(this.animationFrame.bind(this));
  }

  setFrictionAcceleration(frictionAcceleration) {
    this.frictionAcceleration = -Math.abs(frictionAcceleration);
  }

  setReturnVelocity(returnVelocity) {
    this.returnVelocity = Math.abs(returnVelocity);
  }
  /**
   * Private Functions
   * */
  // Disables the this. Called when state reaches limit
  disable() {
    this.removeTouchEvents(this.$element);
    this.$element = null;

    this.pressed = false;
    this.shouldExit = false;
    this.shouldReturn = false;
  }
  // Adds the touch events passed to the element passed
  addTouchEvents($element, pressHandler, releaseHandler, moveHandler) {
    $element.on(`touchstart.${NAMESPACE}`, pressHandler);
    $element.on(`mousedown.${NAMESPACE}`, pressHandler);

    $element.on(`touchend.${NAMESPACE}`, releaseHandler);
    $element.on(`mouseup.${NAMESPACE}`, releaseHandler);

    $element.on(`touchmove.${NAMESPACE}`, moveHandler);
    $element.on(`mousemove.${NAMESPACE}`, moveHandler);
  }
  removeTouchEvents($element) {
    $element.off(`.${NAMESPACE}`);
  }
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
  // Called when the element is pressed
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
    this.addTouchEvents(
      this.$body, null, this.release.bind(this), this.pointerMoved.bind(this));
  }
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
    this.removeTouchEvents(this.$body);
  }
  // Called every frame to update everything
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

    // Bug check if an animationFrameHandler was supplied
    if (this.animationFrameHandler) {
      this.animationFrameHandler(this.stateX);
    }

    // Call this function once per frame
    window.requestAnimationFrame(this.animationFrame.bind(this));
  }
}

export default SlideHelper;
