import React from 'react';
import Card from './Card/Card';
import { Link } from 'react-router'

import ContentCard from './Card/ContentCard/ContentCard';
import FeedbackCard from './Card/FeedbackCard/FeedbackCard';
import FinishCard from './Card/FinishCard/FinishCard';
import QuizCard from './Card/QuizCard/QuizCard';

class CardsList extends React.Component {
  render() {
    const cardsArray = this.props.cards.map((card, index) => {
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
        index,
        cardsCount: this.props.cards.length, // we pass this for the positioning
      });
    });
    // TODO: separate content by quizes
    return (
      <div>
        <div className="lesson-data">
          <Link to="course/programacion/" className="close-lesson close">
            <i className="material-icons">close</i>
          </Link>
          <div className="progress">
            <div className="progress-bar progress-bar-info"></div>
          </div>
          </div>
        <div className="cards-list">
          {cardsArray}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default CardsList;
