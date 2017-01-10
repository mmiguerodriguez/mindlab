import React from 'react';

import ContentCard from './Card/ContentCard/ContentCard';
import FeedbackCard from './Card/FeedbackCard/FeedbackCard';
import FinishCard from './Card/FinishCard/FinishCard';
import QuizCard from './Card/QuizCard/QuizCard';

class CardsList extends React.Component {
  render() {
    const cardsContent = [
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'HOLA',
        text: 'Esto es un texto',
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page2.png',
        title: 'Segunda card',
        text: 'Esto es otro texto, un poco más largo que el anterior',
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'Esto es otro texto, un poco más largo que el anterior, y también que el primero.',
      },
    ];
    const cardsArray = cardsContent.map((card, index) => {
      let cardType = null;
      switch (card.type) {
        case 'content':
          cardType = ContentCard;
          break;
        case 'feedback':
          cardType = FeedbackCard;
          break;
        case 'finish':
          cardType = FinishCard;
          break;
        case 'quiz':
          cardType = QuizCard;
          break;
        default:
          cardType = ContentCard;
      }
      return React.createElement(cardType, {
        key: `card-${index}`,
        ...card,
        zIndex: cardsContent.length - index,
        cardsCount: cardsContent.length, // we pass this for the positioning
      });
    });
    console.log(cardsArray);
    window.cards = cardsArray;
    return (
      <div className="cards-list">
        {cardsArray}
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
};

export default CardsList;
