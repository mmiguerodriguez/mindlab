import React from 'react';

import slideHelper from './SlideHelper.js';

class Card extends React.Component {
  
  componentDidMount(){
    console.log('Mounted');
    
    const $element = $(this.card);
    const size = 400;
    const animationFrameHandler = (state) => {console.log(state);};
    const finishHandler = () => {console.log('Out of bounds');};
    
    let cardSlider = null;
    if(this.props.id === 0){
      cardSlider = new slideHelper({$element,size,animationFrameHandler,finishHandler});
    }
  }
  
  render() {
    
    const content = this.props.content;
    
    return (
      <div id={this.props.id} className="card" ref={(card) => {this.card = card;}}>
        {
          content
        }
      </div>
    );
  }
}

export default Card;

/*global $*/