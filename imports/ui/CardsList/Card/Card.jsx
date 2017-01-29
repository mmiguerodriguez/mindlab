import React from 'react';
import Measure from 'react-measure';
import SlideHelper from './SlideHelper';

import ContentCard from './ContentCard/ContentCard';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import FinishCard from './FinishCard/FinishCard';
import QuizCard from './QuizCard/QuizCard';


class Card extends React.Component {
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
      // Updated when the card is sl
      passed: false,
    };

    this.cardSlider = null;
    const type = this.props.contentProps.type;
    this.shouldSlide = !(type === 'code' || type === 'order' || type === 'multiple-choice' || type === 'feedback' || type === 'finish');
    this.passCard = this.passCard.bind(this);
  }

  componentWillUnmount() {
    if (this.cardSlider) {
      this.cardSlider.disable();
      this.cardSlider = null;
    }
  }

  getCardContent() {
    let cardType = null;
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
      cardsCount: this.props.cardsCount,
      passCard: this.passCard,
    });
  }

  /**
   * Updates or sets a sliding helper for the cards.
   * WARNING:
   *  Requires dimensions to be measured
   * @return {[type]} [description]
   */
  updateCardSlider() {
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
        this.setState({
          passed: true,
        });
        this.props.cardPassed();
      };
      const slideHelperProps = {
        $element: $card,
        size: this.state.dimensions.width,
        finishHandler,
        stateUpdateHandler,
      };
      this.cardSlider = new SlideHelper(slideHelperProps);
    } else {
      this.cardSlider.setSize(this.state.dimensions.width);
    }
  }

  /**
   * programatically passes the card with the animation
   */
  passCard() {
    if (this.cardSlider && this.cardSlider.enabled) {
      this.cardSlider.disable();
    }
    if (!this.state.passed) {
      // Check if card reached the limit
      if (Math.abs(this.state.displacement.x) >= this.state.dimensions.width) {
        this.setState({
          passed: true,
        });
        this.props.cardPassed();
      } else {
        this.setState({
          displacement: {
            x: this.state.displacement.x - (0.1 * this.state.dimensions.width),
          },
        }, () => {
          requestAnimationFrame(this.passCard);
        });
      }
    }
  }

  render() {
    if (this.shouldSlide && this.state.dimensions.measured &&
        (!this.cardSlider || this.cardSlider.size !== this.state.dimensions.width)
    ) {
      this.updateCardSlider();
    }

    const cardStyle = {
      zIndex: this.props.cardsCount - this.props.index,
      transform:
        `translate(${this.state.displacement.x}px, ${10 * (this.props.index)}px) rotateZ(${(this.state.displacement.x / this.state.dimensions.width) * 35}deg)`,
      display: this.state.passed ? 'none' : undefined,
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
  cardPassed: React.PropTypes.func,
};
Card.defaultProps = {
  cardPassed: () => {},
};

export default Card;

/* global $ */
