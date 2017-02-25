import React from 'react';
import Card from './Card/Card';

// import ContentCard from './Card/ContentCard/ContentCard';
// import FeedbackCard from './Card/FeedbackCard/FeedbackCard';
// import FinishCard from './Card/FinishCard/FinishCard';
// import MultipleChoiceCard from './Card/QuizCard/MultipleChoiceCard/MultipleChoiceCard';
// import OrderCard from './Card/QuizCard/OrderCard/OrderCard';
// import CodeCard from './Card/QuizCard/CodeCard/CodeCard';

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
    const currentTime = Math.floor(Date.now() / 1000); // in seconds
    // Second in which the card appeared; used to calculate time per card
    this.initialCardTimer = currentTime;
    this.initialLessonTimer = currentTime;

    this.state = {
      cardStacks: this.getCardStacks(props.cards),
      currentStackIndex: 0, // The index of the currently visible card stack.
      currentCardIndex: 0, // The index withing the stack of the currently visible card.
    };

    this.cardPassed = this.cardPassed.bind(this);
    this.previousCard = this.previousCard.bind(this);
    this.getCard = this.getCard.bind(this);
    this.getCurrentCardIndex = this.getCurrentCardIndex.bind(this);
  }

  getCard(contentProps, key, index, cardsCount, currentCardIndex) {
    /**
     * Returns a card component with the passed properties and index
     * @param {Object} contentProps: the props of the card
     * @param {Integer} index: index of the card within the stack
     * @param {Integer} currentStackCardsCount: amount of cards in this stack
     * @param {Integer} index: index of the card within the lesson's cards
     * @return {Component} card
     */
    return (
      <Card
        key={`card-${key}`}
        contentProps={contentProps}
        index={index}
        cardsCount={cardsCount}
        currentCardIndex={currentCardIndex}
        cardPassed={this.cardPassed.bind(this)} // TODO: investigate this
        previousCard={this.previousCard.bind(this)}
      />
    );
  }

  getCurrentCardIndex() {
    return this.state.currentCardIndex;
  }

  getCardStacks(cards) {
    /**
     * getCardStacks: converts cards content to an array of card stacks
     * @param {Array} cards: array of cards content
     * @return {Array} cardsStacks: array of cards components
     *   example: [[contentCard], [quiz, quiz]]
     */

    /**
      * First create a model of the stack, saving what each position will have, but just the data.
      * So, save in cardStacks each card passed in the place of the stack where the card will be.
      */

    const cardStacks = [[]]; // The cardStacks but not as react elements, just the data object
    let currentStackIsQuizes = Card.isQuiz(cards[0]);

    /**
     * Every stack either is of quizes or is not.
     * If a card is not the same type as the current stack, a new stack should be created.
     */

    cards.forEach((rawCard) => {
      const card = this.addMetaData(rawCard);
      const currentCardIsQuiz = Card.isQuiz(card);
      const forceNewStack = card.forceNewStack ||
                            card.type === 'finish' ||
                            card.type === 'feedback';

      if ((currentCardIsQuiz === currentStackIsQuizes && !forceNewStack)
          || cardStacks[0].length === 0) {
        // Current card should be in the same stack as the previous, so push it
        cardStacks[cardStacks.length - 1].push(card);
      } else {
        // Current card should be in a new stack => Push a new stack
        cardStacks.push([card]);

        currentStackIsQuizes = currentCardIsQuiz;
      }
    });


    /**
      * Now that the cardStacks was organized and everything saved where it should be,
      * replace every data object by Card element containing the corresponding data
      */
    const reactCardStacks = []; // The cardStacks saves as react elements
    let currentCardGlobalIndex = 0;
    cardStacks.forEach((stack) => {
      const currentCardStack = [];
      reactCardStacks.push(currentCardStack);
      stack.forEach((card, index) => {
        currentCardStack.push(
          this.getCard(card, currentCardGlobalIndex, index, stack.length - 1, 0));
        currentCardGlobalIndex += 1;
      });
    });

    return reactCardStacks;
  }

  /**
   * Adds some data that is used for example by analytics
   * @param {object} card A card object, not an element, just its properties
   * @return {object} card with metadata
   */
  addMetaData(card) {
    return {
      ...card,
      lessonName: Card.isQuiz(card) || card.type === 'finish' ?
        this.props.lessonName : undefined,
      lessonTime: this.initialLessonTimer,
      getCurrentCardGlobalIndex: Card.isQuiz(card) ?
        this.props.getCurrentCardGlobalIndex : undefined, // needed for analytics
    };
  }

  cardPassed() {
    /**
     * cardPassed: callback that triggers when a card is passed
     * @return {Promise} promise fulfills after state is updated
     *   {string} result 'newCard' if passed to a new card,
     *                   'newStack' if passed to a new stack
     */
    return new Promise((resolve) => {
      const currentTime = Math.floor(Date.now() / 1000); // in seconds
      const cardTime = currentTime - this.initialCardTimer;
      this.initialCardTimer = currentTime;
      ga('send', {
        hitType: 'event',
        eventCategory: 'Lesson',
        eventAction: 'Card passed',
        'Lesson name': this.props.lessonName,
        'Card index': this.props.getCurrentCardGlobalIndex(),
        'Card time': cardTime,
      });

      // Used by lessonPage in the progressBar
      this.props.setCurrentCardGlobalIndex(this.props.getCurrentCardGlobalIndex() + 1);

      // If the current stack is out of cards, show the next stack
      if (
        this.state.currentCardIndex ===
        this.state.cardStacks[this.state.currentStackIndex].length - 1
      ) {
        this.setState({
          currentStackIndex: this.state.currentStackIndex + 1,
          currentCardIndex: 0, // Show the first card of the new stack
        }, () => {
          resolve('newStack');
        }); // fulfill when state is updated
      } else {
        this.setState({
          currentCardIndex: this.state.currentCardIndex + 1,
        }, () => {
          resolve('newCard');
        }); // fulfill when state is updated
      }
    });
  }

  previousCard() {
    /**
     * previousCard: show the previous card
     */

    // Validate that the user is not in the first card
    if (this.state.currentStackIndex === 0 && this.state.currentCardIndex === 0) {
      return;
    }

    const currentTime = Math.floor(Date.now() / 1000); // in seconds
    const cardTime = currentTime - this.initialCardTimer;
    this.initialCardTimer = currentTime;
    ga('send', {
      hitType: 'event',
      eventCategory: 'Lesson',
      eventAction: 'Previous card',
      'Lesson name': this.props.lessonName,
      'Card index': this.props.getCurrentCardGlobalIndex(),
      'Card time': cardTime,
    });

    // Used by lessonPage in the progressBar
    this.props.setCurrentCardGlobalIndex(this.props.getCurrentCardGlobalIndex() - 1);

    // If the card is the first one of the stack, show previous stack
    if (
     this.state.currentCardIndex === 0
    ) {
      this.setState({
        currentStackIndex: this.state.currentStackIndex - 1,
         // Show the last card of the previous stack
        currentCardIndex: this.state.cardStacks[this.state.currentStackIndex - 1].length - 1,
      });
    } else {
      this.setState({
        currentCardIndex: this.state.currentCardIndex - 1,
      });
    }
  }

  render() {
    // Convert cardStack to react elements stack
    const cardStack = this.state.cardStacks[this.state.currentStackIndex].map(card =>
      React.cloneElement(card, { currentCardIndex: this.state.currentCardIndex }));

    return (
      <div className="cards-list-container">
        <div className="cards-list">
          {cardStack}
        </div>
      </div>
    );
  }
}

CardsList.propTypes = {
  cards: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  lessonName: React.PropTypes.string,
  setCurrentCardGlobalIndex: React.PropTypes.func,
  getCurrentCardGlobalIndex: React.PropTypes.func,
};

export default CardsList;
