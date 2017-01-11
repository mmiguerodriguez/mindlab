import React from 'react';

import slideHelper from './slideHelper.js';

class Card extends React.Component {
  
  componentDidMount(){
    console.log('Mounted');
    
    if(this.props.id === 0){
      slideHelper.apply($(this.card),400,(state) => {console.log(state);},() => {console.log('Out of bounds');});
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