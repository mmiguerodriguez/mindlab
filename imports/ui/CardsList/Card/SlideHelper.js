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
  static apply($element, size, animationFrameHandler, finishOrRightHandler, leftHandler) {
    if (SlideHelper.$element) {
      console.error('Applying while already applied to another element!');
    }
    if (!$element) {
      console.error('Did not pass element');
    }
    if (!size && !SlideHelper.size) {
      console.error('Did not pass size');
    }

    // Initialize if not initialized
    if (!SlideHelper.initialized) {
      SlideHelper.init();
    }
    SlideHelper.initialized = true;

    SlideHelper.$element = $element;
    SlideHelper.addTouchEvents(SlideHelper.$element, SlideHelper.press);

    // If arguments not passed, assume the previously held value
    if (size) {
      SlideHelper.size = size;
    }

    if (animationFrameHandler) {
      SlideHelper.animationFrameHandler = animationFrameHandler;
    }

    if (finishOrRightHandler) {
      if (leftHandler) {
        SlideHelper.rightHandler = finishOrRightHandler;
        SlideHelper.leftHandler = leftHandler;

        SlideHelper.finishHandler = null;
      } else {
        SlideHelper.finishHandler = finishOrRightHandler;

        SlideHelper.rightHandler = null;
        SlideHelper.leftHandler = null;
      }
    }

    SlideHelper.stateX = 0;
    SlideHelper.velocityX = 0;

    // The animation frame calls the animation frame handler and deals with setting the state upon
    // touch release.
    requestAnimationFrame(SlideHelper.animationFrame);
  }

  static setFrictionAcceleration(frictionAcceleration) {
    if (frictionAcceleration < 0) {
      SlideHelper.frictionAcceleration = frictionAcceleration;
    } else {
      SlideHelper.frictionAcceleration = -frictionAcceleration;
    }
  }

  static setReturnVelocity(returnVelocity) {
    if (returnVelocity > 0) {
      SlideHelper.returnVelocity = returnVelocity;
    } else {
      SlideHelper.returnVelocity = -returnVelocity;
    }
  }
  /**
   * Private Functions
   * */
  static init() {
    /**
     * Variables
     * */
    SlideHelper.initialized = false;
    SlideHelper.$body = null;
    SlideHelper.$element = null;
    SlideHelper.size = 0;
    SlideHelper.animationFrameHandler = null;
    SlideHelper.finishHandler = null;
    SlideHelper.rightHandler = null;
    SlideHelper.leftHandler = null;
    SlideHelper.frictionAcceleration = -7;
    SlideHelper.returnVelocity = 80;
    SlideHelper.pressed = false;
    SlideHelper.shouldReturn = false;
    SlideHelper.shouldExit = false;
    SlideHelper.pointerX = null;
    SlideHelper.pointerY = null;
    SlideHelper.lastPointerPositionTimestamp = 0;
    SlideHelper.pressX = null;
    SlideHelper.pressY = null;
    SlideHelper.velocityX = 0;
    SlideHelper.stateX = 0;


    SlideHelper.$body = $(document.body);
  }
  // Disables the SlideHelper. Called when state reaches limit
  static disable() {
    SlideHelper.removeTouchEvents(SlideHelper.$element);
    SlideHelper.$element = null;

    SlideHelper.pressed = false;
    SlideHelper.shouldExit = false;
    SlideHelper.shouldReturn = false;
  }
  // Adds the touch events passed to the element passed
  static addTouchEvents($element, pressHandler, releaseHandler, moveHandler) {
    if (pressHandler) {
      $element.on(`touchstart.${NAMESPACE}`, pressHandler);
      $element.on(`mousedown.${NAMESPACE}`, pressHandler);
    }

    if (releaseHandler) {
      $element.on(`touchend.${NAMESPACE}`, releaseHandler);
      $element.on(`mouseup.${NAMESPACE}`, releaseHandler);
    }

    if (moveHandler) {
      $element.on(`touchmove.${NAMESPACE}`, moveHandler);
      $element.on(`mousemove.${NAMESPACE}`, moveHandler);
    }
  }
  static removeTouchEvents($element) {
    $element.off(`.${NAMESPACE}`);
  }
  static pointerMoved(data) {
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
    SlideHelper.velocityX = (x - SlideHelper.pointerX) /
     ((performance.now() - SlideHelper.lastPointerPositionTimestamp) / 100);
    // Save pointer position
    SlideHelper.pointerX = x;
    SlideHelper.pointerY = y;
    SlideHelper.lastPointerPositionTimestamp = performance.now();

    // Update the state
    SlideHelper.stateX = (SlideHelper.pointerX - SlideHelper.pressX) / SlideHelper.size;
  }
  // Called when the element is pressed
  static press(data) {
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
    SlideHelper.pressX = x;
    SlideHelper.pressY = y;

    // Update current conditions
    SlideHelper.pressed = true;
    SlideHelper.shouldExit = false;
    SlideHelper.shouldReturn = false;

    // Because the element was pressed, start listening for a release and a move
    SlideHelper.addTouchEvents(
      SlideHelper.$body, null, SlideHelper.release, SlideHelper.pointerMoved);
  }
  static release() {
    // Check for a buggy release (a release when the element was not actually being touched)
    if (!SlideHelper.pressed) {
      return;
    }

    SlideHelper.pressed = false;

    /**
     * Determinar si se deberia pasar a la siguiente tarjeta o volver
     * CUIDADO: Matematica
     * */
    const timeToStop = -SlideHelper.velocityX / SlideHelper.frictionAcceleration;
    const finalPositionX = (SlideHelper.stateX * SlideHelper.size) +
      (SlideHelper.velocityX * timeToStop) +
        ((SlideHelper.frictionAcceleration * timeToStop * timeToStop) / 2);
    if (Math.abs(finalPositionX) > 500) {
      // The state would reach the limit, therefore it should continue to the exit
      // (shouldExit = true)
      SlideHelper.shouldReturn = false;
      SlideHelper.shouldExit = true;
    } else {
      // The state would not reach the limit, therefore it should return to rest position
      // (shouldReturn = true)
      SlideHelper.shouldReturn = true;
      SlideHelper.shouldExit = false;
    }

    // Because the element was released, stop listening for a release and a move (will only detach
    // release and move because press is atached to the element, not the body)
    SlideHelper.removeTouchEvents(SlideHelper.$body);
  }
  // Called every frame to update everything
  static animationFrame() {
    if (Math.abs(SlideHelper.stateX) >= 1) {
      // Reached the limit, disable the helper and call corresponding handlers
      SlideHelper.disable();
      if (SlideHelper.finishHandler) {
        SlideHelper.finishHandler();
      }
      if (SlideHelper.leftHandler && SlideHelper.stateX <= -1) {
        SlideHelper.leftHandler();
      }
      if (SlideHelper.rightHandler && SlideHelper.stateX >= 1) {
        SlideHelper.rightHandler();
      }
      return;
    }

    if (SlideHelper.shouldReturn) {
      // Because the state should return to rest position, move to rest position a bit every frame
      const positionDisplacement =
       SlideHelper.returnVelocity / SlideHelper.size;// The distance that will be moved this frame
      // Move
      if (SlideHelper.stateX > positionDisplacement) {
        SlideHelper.stateX -= positionDisplacement;
      } else if (SlideHelper.stateX < -positionDisplacement) {
        SlideHelper.stateX += positionDisplacement;
      } else {
        // If closer to rest position than the move distance, directly set rest position
        SlideHelper.stateX = 0;
      }
    }

    if (SlideHelper.shouldExit) {
      // Because the state should reach the limit (exit), move outside according to velocity
      const positionDisplacement = SlideHelper.velocityX / SlideHelper.size;
      SlideHelper.stateX += positionDisplacement;
    }

    // Bug check if an animationFrameHandler was supplied
    if (SlideHelper.animationFrameHandler) {
      SlideHelper.animationFrameHandler(SlideHelper.stateX);
    }

    // Call this function once per frame
    requestAnimationFrame(SlideHelper.animationFrame);
  }
}

export default SlideHelper;
