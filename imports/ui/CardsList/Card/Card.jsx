import React from 'react';

import slideHelper from './slideHelper.js';

class Card extends React.Component {
  
  componentDidMount(){
    console.log('Mounted');
    
    // slideHelper($(this.card),) // Hay que importar jQuery
  }
  
  render() {
    
    //console.log(slideHelper); // Todo ok
    
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