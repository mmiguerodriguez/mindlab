import React from 'react';
import Measure from 'react-measure';
import $ from 'jquery';
import SlideHelper from './SlideHelper';

class Card extends React.Component {

  // TODO: implement slideHelper and pass cardPassed callback

  constructor(props) {
    super(props);
    this.state = {
      dimensions: {
        width: 1, // Default value only
        height: 1, // Default value only
        measured: false,
      },
      displacement: {
        x: 0, // Used to animate card movement
      },
    };
    this.cardSliderApplied = false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.cardSliderApplied) {
      return true;
    }
    if (nextState.displacement.x === this.state.displacement.x) {
      return false;
    }
    return true;
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
      const slideHelperProps = {
        $element: $card,
        size: this.state.dimensions.width,
        finishHandler: this.props.cardPassed,
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
      transform: this.props.cardsCount ?
        `translate(${this.state.displacement.x}px, ${10 * (this.props.index)}px) rotateZ(${(this.state.displacement.x / this.state.dimensions.width) * 35}deg)` : null,
    };
    return (
      <Measure
        onMeasure={(dimensions) => {
          this.setState({ dimensions: { ...dimensions, measured: true } });
        }}
      >
        <div className="_card" style={cardStyle} ref={(card) => { this.card = card; }}>
          {this.props.content}
        </div>
      </Measure>
    );
  }
}

Card.propTypes = {
  content: React.PropTypes.element.isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func,
};
Card.defaultProps = {
  cardPassed: () => {},
};

export default Card;
