import React from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({ content, zIndex }) => (
  // zIndex is needed because card component has custom zIndex
  <div className="order-card-option" style={{ zIndex: zIndex + 1 }}>
    <i className="material-icons">reorder</i>
    <h4 className="order-card-content">{content}</h4>
  </div>
));

const SortableList = SortableContainer(({ options, zIndex }) => (
  <div className="order-card-options">
    {options.map((option, index) => (
      <SortableItem
        key={`option-${index}`}
        index={index}
        content={option.content}
        zIndex={zIndex}
      />
    ))}
  </div>
));

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
    };

    this.onSortEnd = this.onSortEnd.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      options: arrayMove(this.state.options, oldIndex, newIndex),
    });
  }

  checkAnswer() {
    const options = this.state.options;
    let wrongOrder = false;

    options.forEach((option, index) => {
      if (option.step !== index + 1) {
        wrongOrder = true;
      }
    });

    if (wrongOrder) {
      $.snackbar({ content: this.props.incorrectMessage });
    } else {
      $.snackbar({ content: this.props.correctMessage });
    }

    // TODO: continue to the next card
  }

  render() {
    return (
      <SortableList
        options={this.state.options}
        onSortEnd={this.onSortEnd}
        zIndex={this.props.cardsCount - this.props.index}
      />
    );
  }
}

OrderCard.propTypes = {
  correctMessage: React.PropTypes.string,
  incorrectMessage: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    step: React.PropTypes.number.isRequired,
  })).isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
};

OrderCard.defaultProps = {
  imageUrl: null,
  correctMessage: 'Correcto',
  incorrectMessage: 'Incorrecto',
  cardPassed: () => {},
};

export default OrderCard;

/* global $ */
