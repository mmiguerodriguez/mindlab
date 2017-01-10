import React from 'react';
import Card from './Card/Card';

class CardsList extends React.Component {
  render() {
    
    const cardArray = this.props.cards.map((content,index) => {
      return (
        <Card 
          key={index}
          content={content}
          id={index}
        />
      );
    });
    
    return (
      <div id = "cards-list">
        {
          cardArray
        }
      </div>
    );
  }
}

export default CardsList;
