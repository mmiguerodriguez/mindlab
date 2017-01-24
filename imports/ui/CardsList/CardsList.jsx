import React from 'react';

import ContentCard from './Card/ContentCard/ContentCard';
import FeedbackCard from './Card/FeedbackCard/FeedbackCard';
import FinishCard from './Card/FinishCard/FinishCard';
import MultipleChoiceCard from './Card/QuizCard/MultipleChoiceCard/MultipleChoiceCard';
import OrderCard from './Card/QuizCard/OrderCard/OrderCard';
import CodeCard from './Card/QuizCard/CodeCard/CodeCard';

/**
 * CardsList: Shows stacks of cards.
 * A stack of cards is a group of cards, one on top of the other.
 * Quizes divide the cards in stacks.
 * For example:
 *  [
 *    contentCard,
 *    contentCard,
 *    quiz,
 *    quiz,
 *    contentCard,
 *  ]
 * would end up looking like this:
 *  [
 *    [
 *      contentCard,
 *      contentCard,
 *    ],
 *    [
 *      quiz,
 *      quiz,
 *    ],
 *    [
 *      contentCard
 *    ],
 *  ]
 */
class CardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardStacks: this.getCardStacks(props.cards),
      currentStackIndex: 0, // The index of the currently visible card stack.
      currentCardIndex: 0, // The index withing the stack of the currently
                           // visible card.
    };

    this.cardPassed = this.cardPassed.bind(this);
  }
  /**
   * getCardFromCardContent: converts cards content to a card component
   * @param {Object} cardContent: the props of the card
   * @param {Integer} index: index of the card within the stack
   * @return {Component} card
   */
  getCardFromCardContent(cardContent, index) {
    let cardType = null;
    switch (cardContent.type) {
      case 'content':
        cardType = ContentCard;
        break;
      case 'feedback':
        cardType = FeedbackCard;
        // TODO: if it is the last lesson, redirect to '/'
        cardContent.nextUrl = cardContent.nextUrl || this.props.lessonUrl;
        break;
      case 'finish':
        cardType = FinishCard;
        break;
      case 'multiple-choice':
        cardType = MultipleChoiceCard;
        break;
      case 'order':
        cardType = OrderCard;
        break;
      case 'code':
        cardType = CodeCard;
        break;
      default:
        cardType = ContentCard;
    }
    return React.createElement(cardType, {
      key: `card-${index}`, // TODO: change index for cardId
      ...cardContent,
      index,
      cardsCount: this.props.cards.length, // we pass this for the positioning
      cardPassed: this.cardPassed,
    });
  }
  /**
   * getCardStacks: converts cards content to an array of card stacks
   * @param {Array} cards: array of cards content
   * @return {Array} cardsStacks: array of cards components
   *   example: [[contentCard], [quiz, quiz]]
   */
  getCardStacks(cards) {
    const stacks = [[]];
    let currentStackIsQuizes = cards[0].type === 'order' ||
                               cards[0].type === 'multiple-choice';
    cards.forEach((card) => {
      const currentCardIsQuiz = card.type === 'order' ||
                                card.type === 'multiple-choice';
      if (currentCardIsQuiz === currentStackIsQuizes && !card.forceNewStack) {
        const currentStackCount = stacks[stacks.length - 1].length;
        // Current card should be in the same stack as the previous, so push it
        stacks[stacks.length - 1].push(
          this.getCardFromCardContent(card, currentStackCount),
        );
      } else {
        // Current card should be in a new stack
        // Push the new stack
        stacks.push([this.getCardFromCardContent(card, 0)]);
        currentStackIsQuizes = currentCardIsQuiz;
      }
    });
    return stacks;
  }
  /**
   * cardPassed: callback that triggers when a card is passed
   */
  cardPassed() {
    // If the current stack is out of cards, show the next stack
    if (
      this.state.currentCardIndex ===
      this.state.cardStacks[this.state.currentStackIndex].length - 1
    ) {
      this.setState({
        // If the stack is the last one, the render method will show
        // finish cards
        currentStackIndex: this.state.currentStackIndex + 1,
        currentCardIndex: 0, // Show the first card of the new stack
      });
    } else {
      this.setState({
        currentCardIndex: this.state.currentCardIndex + 1,
      });
    }
  }
  render() {
    return (
      <div className="cards-list">
        {this.state.cardStacks[this.state.currentStackIndex]}
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  lessonUrl: React.PropTypes.string.isRequired,
};

export default CardsList;
