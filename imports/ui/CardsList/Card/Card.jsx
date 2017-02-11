import React from 'react';
import Measure from 'react-measure';
import SlideHelper from './../../../utils/client/SlideHelper';

import ContentCard from './ContentCard/ContentCard';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import FinishCard from './FinishCard/FinishCard';
import QuizCard from './QuizCard/QuizCard';


class Card extends React.Component {
  /**
   * returns if a card is or not a quiz
   * @param  {object}  card A card object, not an element, just its properties
   * @return {Boolean}      true if the card is a quiz, false if it is not
   */
  static isQuiz(card) {
    return card.type === 'order' ||
      card.type === 'multiple-choice' ||
      card.type === 'code';
  }

  constructor(props) {
    super(props);
    this.state = {
      // The dimensions of the card, used internally
      dimensions: {
        width: 1, // Default value only
        height: 1, // Default value only
        measured: false,
      },
      // Used by the sliding movement of the card
      displacement: {
        x: 0, // Used to animate card movement
      },
      // Updated when the card gets slid
      // true by default if cards has already passed
      passed: props.currentCardIndex > props.index,
      cardStyle: null,
    };

    this.cardSlider = null;
    const type = this.props.contentProps.type;
    this.shouldSlide = !(type === 'code' || type === 'order' || type === 'multiple-choice' || type === 'feedback' || type === 'finish');
    this.slideCard = this.slideCard.bind(this);
    this.placeCardInOriginalPosition = this.placeCardInOriginalPosition.bind(this);
    this.resetCardStyle = this.resetCardStyle.bind(this);
  }

  componentDidMount() {
    // check if user went back to this card from the next stack
    // and adjust the animation direction accordingly
    const slideInDirection = (this.props.cardsCount === this.props.index && // is it the last card?
                             // is it the currently visible card?
                             this.props.currentCardIndex === this.props.index) ?
                               'down' : // if user went back
                               'up'; // if it is the first time
    this.playSlideInAnimation(slideInDirection);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentCardIndex === nextProps.index && this.state.passed) {
      // User returned to the card by swiping down
      this.setState({
        ...this.state,
        passed: false,
      }, () => {
        this.playSlideInAnimation('down'); // makes card visible and plays the animation
      });
      this.cardSlider = null; // In order to reapply the slideHelper
    }
  }

  componentWillUnmount() {
    if (this.cardSlider) {
      this.cardSlider.disable();
      this.cardSlider = null;
    }
  }

  getCardContent() {
    let cardType;
    switch (this.props.contentProps.type) {
      case 'content':
        cardType = ContentCard;
        break;
      case 'feedback':
        cardType = FeedbackCard;
        break;
      case 'finish':
        cardType = FinishCard;
        break;
      case 'multiple-choice':
      case 'order':
      case 'code':
        cardType = QuizCard;
        break;
      default:
        cardType = ContentCard;
    }
    return React.createElement(cardType, {
      ...this.props.contentProps,
      /**
       * LO DE ABAJO ES NECESITADO POR OrderCard y MultipleChoiceCard !!
       * Lo de abajo es horrible, no lo puedo sacar porque es necesario con la implementacion
       *  actual. Si le pasamos estos parametros, estas haciendo que piense con cosas que solo
       *  deberian ser usadas por Card.
       * Lo correcto sería que la propiedad que pidan sea lo que realmente necesiten, no lo que usan
       *  para carcularlo. Por ejemplo, si use index y cardsCount para sacar el zIndex, directamente
       *  deberiamos pasarle el zIndex.
       *  TODO: Fix
       */
      index: this.props.index,
      slideCard: this.slideCard,
    });
  }

  /**
   * play the slide in down animation
   * @param {string} direction ('up' or 'down') the direction of the slide in
   */
  playSlideInAnimation(direction = 'down') {
    if (direction !== 'down' && direction !== 'up') {
      return;
    }
    // initial top style property
    // if direction is equal to 'down' put card on top of the screen
    // otherwise, put the card beneath the screen
    const cardTop = this.state.dimensions.measured ?
      `${direction === 'down' ? '-' : ''}${this.state.dimensions.height}px` :
      `${direction === 'down' ? '-' : ''}450px`; // the default height of the card

    // Reset the state and place the card at the top of the screen
    this.setState({
      ...this.state,
      displacement: { // reset the displacement
        x: 0,
      },
      cardStyle: {
        top: cardTop,
      },
    }, () => {
      setTimeout(() => {
        this.placeCardInOriginalPosition()
          .then(() => {
            setTimeout(this.resetCardStyle, 1000);
          });
      }, 10); // leave time to update the dom; needed for the animation
    });
  }

  /**
  * updates the card's style to place it in it's original position
  * @return {Promise} promise
  */
  placeCardInOriginalPosition() {
    return new Promise((resolve) => {
      this.setState({
        ...this.state,
        cardStyle: {
          transition: 'top 1s',
          top: '85px',
        },
      }, resolve);
    });
  }

  /**
   * resets the card's style
   */
  resetCardStyle() {
    this.setState({
      ...this.state,
      cardStyle: null,
    });
  }


  updateCardSlider() {
    /**
     * Updates or sets a sliding helper for the cards.
     * WARNING:
     *  Requires dimensions to have been measured
     * @return {undefined}
     */

    if (!this.cardSlider) {
      // Create and instantiate a SlideHelper
      const $card = $(this.card);
      const stateUpdateHandler = (stateX) => {
        if (this.state.displacement.x !== stateX * this.state.dimensions.width) {
          this.setState({
            displacement: {
              x: stateX * this.state.dimensions.width,
            },
          });
        }
      };
      const finishHandler = () => {
        this.props.cardPassed()
          .then((result) => {
            if (result === 'newCard') { // do not update the state if there is a new stack
              this.setState({
                passed: true,
              });
            }
          });
      };
      const slideHelperProps = {
        $element: $card,
        size: this.state.dimensions.width,
        escapeThreshold: 0.1,
        finishHandler,
        downHandler: this.props.previousCard,
        stateUpdateHandler,
      };
      this.cardSlider = new SlideHelper(slideHelperProps);
    } else {
      this.cardSlider.setSize(this.state.dimensions.width);
    }
  }

  slideCard() {
    /**
     * Programatically passes the card with the animation
     */
    if (this.cardSlider && this.cardSlider.enabled) {
      this.cardSlider.disable();
    }
    if (!this.state.passed) {
      // Check if card reached the limit
      if (Math.abs(this.state.displacement.x) >= this.state.dimensions.width) {
        this.props.cardPassed()
          .then(() => {
            this.setState({
              passed: true,
            });
          });
      } else {
        this.setState({
          displacement: {
            x: this.state.displacement.x - (0.1 * this.state.dimensions.width),
          },
        }, () => {
          requestAnimationFrame(this.slideCard);
        });
      }
    }
  }

  render() {
    if ((this.props.currentCardIndex === this.props.index) && // Only apply cardSlider on top card
        this.shouldSlide && this.state.dimensions.measured &&
        (!this.cardSlider || this.cardSlider.size !== this.state.dimensions.width)
        // TODO: Analize the !==, apparently it does not make sense
    ) {
      this.updateCardSlider();
    }

    const cardStyle = {
      ...this.state.cardStyle,
      zIndex: this.props.cardsCount - this.props.index,
      // Another way is this.props.index - this.props.currentCardIndex
      transform:
        `translate(${this.state.displacement.x}px, ${10 * (this.props.index - this.props.currentCardIndex)}px) rotateZ(${(this.state.displacement.x / this.state.dimensions.width) * 35}deg)`,
      display: (this.state.passed || this.props.index < this.props.currentCardIndex) ? 'none' : undefined,
    };

    const cardContent = this.getCardContent();

    return (
      <Measure
        onMeasure={(dimensions) => {
          this.setState({ dimensions: { ...dimensions, measured: true } });
        }}
      >
        <div className="_card" style={cardStyle} ref={(card) => { this.card = card; }}>
          {cardContent}
        </div>
      </Measure>
    );
  }
}

Card.propTypes = {
  contentProps: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    // May have much more props, but just the type is required here
    // The other props are required in the cardType itself
  }).isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  currentCardIndex: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func,
  previousCard: React.PropTypes.func,
};
Card.defaultProps = {
  cardPassed: () => {},
  previousCard: () => {},
};

export default Card;
