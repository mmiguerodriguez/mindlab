/**
 * - slideHelper($element,size,animationFrameHandler,finishOrRightHandler,leftHandler)
 * - setFrictionAcceleration(frictionAcceleration)
 * - setReturnVelocity(returnVelocity)
 * */
import $ from 'jquery';

/**
 * Variables
 * */
const NAMESPACE = 'slideHelper';

let _initialized = false;

let _$body = null;

let _$element = null;
let _size = 0;
let _animationFrameHandler = null;
let _finishHandler = null;
let _rightHandler = null, _leftHandler = null;

let _frictionAcceleration = -7;
let _returnVelocity = 80;

let _pressed = false;
let _shouldReturn = false;
let _shouldExit = false;

let _pointerX = null;
let _pointerY = null;
let _lastPointerPositionTimestamp = 0;
let _pressX = null;
let _pressY = null;
let _velocityX = 0;

let _stateX = 0;
  
  
const slideHelper = {  
  apply($element,size,animationFrameHandler,finishOrRightHandler,leftHandler){
    if(_$element){
      console.error('Applying while already applied to another element!');
    }
    if(!$element){
      console.error('Did not pass element');
    }
    if(!size && !_size){
      console.error('Did not pass size');
    }
    
    if(!_initialized){
      _init();
    }
    _initialized = true;
    
    _$element = $element;
    _addTouchEvents(_$element,_press);
    
    if(size){
      _size = size;
    }
    
    
    if(animationFrameHandler){
      _animationFrameHandler = animationFrameHandler;
    }
    
    
    if(finishOrRightHandler){
      if(leftHandler){
        _rightHandler = finishOrRightHandler;
        _leftHandler = leftHandler;
        
        _finishHandler = null;
      }
      else{
        _finishHandler = finishOrRightHandler;
        
        _rightHandler = null;
        _leftHandler = null;
      }
    }
    
    _stateX = 0;
    _velocityX = 0;
    
    requestAnimationFrame(_animationFrame);
  },
  
  setFrictionAcceleration(frictionAcceleration){
    if(frictionAcceleration>0){
      frictionAcceleration = -frictionAcceleration;
    }
    
    _frictionAcceleration = frictionAcceleration;
  },
  
  setReturnVelocity(returnVelocity){
    if(returnVelocity<0){
      returnVelocity = -returnVelocity;
    }
    
    _returnVelocity = returnVelocity;
  },
};

/**
 * Functions
 * */
const _init = () => {
  _$body = $(document.body);
};

const _disable = () => {
  _removeTouchEvents(_$element);
  _$element = null;
  
  _pressed = false;
  _shouldExit = false;
  _shouldReturn = false;
};

const _addTouchEvents = (element,pressHandler,releaseHandler,moveHandler) => {
  if(pressHandler){
    element.on(`touchstart.${NAMESPACE}`,pressHandler);
    element.on(`mousedown.${NAMESPACE}`,pressHandler);
  }
  
  if(releaseHandler){
    element.on(`touchend.${NAMESPACE}`,releaseHandler);
    element.on(`mouseup.${NAMESPACE}`,releaseHandler);
  }
  
  if(moveHandler){
    element.on(`touchmove.${NAMESPACE}`,moveHandler);
    element.on(`mousemove.${NAMESPACE}`,moveHandler);
  }
};

const _removeTouchEvents = (element) => {
  element.off(`.${NAMESPACE}`);
};

const _pointerMoved = (data) => {
  let x,y;
  if(data.screenX){
      x = data.screenX;
      y = data.screenY;
  }
  if(data.touches && data.touches.item(0).screenX){
      x = data.touches.item(0).screenX;
      y = data.touches.item(0).screenY;
  }
  
  _velocityX = (x-_pointerX)/((performance.now()-_lastPointerPositionTimestamp)/100);
  _pointerX = x;
  _pointerY = y;
  _lastPointerPositionTimestamp = performance.now();
  
  _stateX = (_pointerX-_pressX)/_size;
};

const _press = (data) => {
  console.log('Press');
  
  let x,y;
  if(data.screenX){
      x = data.screenX;
      y = data.screenY;
  }
  if(data.touches && data.touches.item(0).screenX){
      x = data.touches.item(0).screenX;
      y = data.touches.item(0).screenY;
  }
  
  _pressX = x;
  _pressY = y;
  
  _pressed = true;
  _shouldExit = false;
  _shouldReturn = false;
  
  _addTouchEvents(_$body,null,_release,_pointerMoved);
};

const _release = () => {
  if(!_pressed){
      return;
  }
  console.log('Release');
  
  _pressed = false;

  /**
   * Determinar si se deberia pasar a la siguiente tarjeta o volver
   * */
  const timeToStop = -_velocityX/_frictionAcceleration;
  const finalPositionX = _stateX*_size+_velocityX*timeToStop+_frictionAcceleration*timeToStop*timeToStop/2;
  if(Math.abs(finalPositionX)>500){
    _shouldReturn = false;
    _shouldExit = true;
  }
  else {
    _shouldReturn = true;
    _shouldExit = false;
  }
  
  _removeTouchEvents(_$body);
};

const _animationFrame = () => {
  console.log('Called animation frame');
  
  if(Math.abs(_stateX)>=1){
    _disable();
    if(_finishHandler){
      _finishHandler();
    }
    if(_leftHandler && _stateX<=-1){
      _leftHandler();
    }
    if(_rightHandler && _stateX>=1){
      _rightHandler();
    }
    return;
  }
  
  if(_shouldReturn){
    let positionDisplacement = _returnVelocity/_size;
    if(_stateX>positionDisplacement){
      _stateX-=positionDisplacement;
    }
    else if(_stateX<-positionDisplacement){
      _stateX+=positionDisplacement;
    }
    else {
      _stateX = 0;
    }
  }
  
  if(_shouldExit){
    let positionDisplacement = _velocityX/_size;
    _stateX+=positionDisplacement;
  }
  
  if(_animationFrameHandler){
    _animationFrameHandler(_stateX);
  }
  requestAnimationFrame(_animationFrame);
};


export default slideHelper;

/*global $*/
/*global performance*/