import React from 'react';

class Card extends React.Component {

  // TODO: implement slideHelper and pass cardPassed callback
  render() {
    const cardStyle = {
      zIndex: this.props.cardsCount - this.props.index,
      transform: this.props.cardsCount ?
        `translateY(${10 * (this.props.index)}px)` : null,
    };
    return (
      <div className="_card" style={cardStyle}>
        {this.props.content}
      </div>
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
