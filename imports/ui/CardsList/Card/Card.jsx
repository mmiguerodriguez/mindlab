import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="_card">
        {this.props.content}
      </div>
    );
  }
}

Card.propTypes = {
  content: React.PropTypes.element.isRequired,
};

export default Card;
