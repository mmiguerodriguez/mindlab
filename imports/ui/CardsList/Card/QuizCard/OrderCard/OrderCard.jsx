import React from 'react';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';

import QuizCard from '../QuizCard';

const SortableItem = SortableElement(({ value, zIndex }) => (
  // zIndex is needed because card component have custom zIndex
  <div className="order-card-option" style={{ zIndex: zIndex + 1 }}>
    <h4>{value}</h4>
  </div>
));

const SortableList = SortableContainer(({ items, zIndex }) => (
  <div className="order-card-options">
    {items.map((value, index) => (
      <SortableItem key={`item-${index}`} index={index} value={value} zIndex={zIndex} />
    ))}
  </div>
));

class OrderCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // We split options in the text and the step number
      items: this.props.options.map(option => option.content),
      itemsOrder: this.props.options.map(option => option.step),
    };

    this.onSortEnd = this.onSortEnd.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
      itemsOrder: arrayMove(this.state.itemsOrder, oldIndex, newIndex),
    });
  }

  checkAnswer() {
    const itemsOrder = this.state.itemsOrder;

    for (let i = 1; i < itemsOrder.length; i += 1) {
      if (itemsOrder[i - 1] > itemsOrder[i]) {
        $.snackbar({ content: this.props.incorrectMessage });
        // If the list is unordered, then exit checkAnswer function
        return;
      }
    }

    $.snackbar({ content: this.props.correctMessage });

    // TODO: continue to the next card
  }

  render() {
    const options = (
      <SortableList items={this.state.items} onSortEnd={this.onSortEnd} zIndex={this.props.index} />
    );

    return (
      <QuizCard
        imageUrl={this.props.imageUrl}
        question={this.props.question}
        options={options}
        checkAnswer={this.checkAnswer}
        index={this.props.index}
        cardsCount={this.props.cardsCount}
        cardPassed={this.props.cardPassed}
      />
    );
  }
}

OrderCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string,
  correctMessage: React.PropTypes.string,
  incorrectMessage: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.object),
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func.isRequired,
};

OrderCard.defaultProps = {
  imageUrl: null,
  question: null,
  options: null,
  correctMessage: 'Correcto',
  incorrectMessage: 'Incorrecto',
};

export default OrderCard;
