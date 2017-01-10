import React from 'react';

class Card extends React.Component {
  render() {
    const cardStyle = {
      zIndex: this.props.zIndex,
      transform: this.props.cardsCount ?
        `translateY(${-440 * (this.props.cardsCount - this.props.zIndex)}px)` : null,
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
  zIndex: React.PropTypes.number,
  cardsCount: React.PropTypes.number,
};

export default Card;
