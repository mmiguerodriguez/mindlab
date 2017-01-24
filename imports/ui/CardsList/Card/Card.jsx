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

    this.cardSliderApplied = false;
  }

  /**
   * Prevent update if the xDisplacemente is the same as before
   */
  shouldComponentUpdate(nextProps, nextState) {
    // If slider not implemented, allow every update until it is
    if (!this.cardSliderApplied || nextState.passed !== this.state.passed) {
      return true;
    }
    // If dimensions changed, update
    const currentDimensions = this.state.dimensions;
    if (nextState.dimensions.width !== currentDimensions.width ||
        nextState.dimensions.height !== currentDimensions.height ||
        nextState.dimensions.passed !== currentDimensions.passed) {
      return true;
    }

    if (nextState.displacement.x === this.state.displacement.x) {
      return false;
    }

    return true;
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
        this.setState({
          displacement: {
            x: stateX * this.state.dimensions.width,
          },
        });
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

  render() {
    if (this.state.dimensions.measured) {
      this.updateCardSlider();
      this.cardSliderApplied = true;
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
