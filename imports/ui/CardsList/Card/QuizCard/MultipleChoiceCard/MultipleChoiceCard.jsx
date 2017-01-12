import React from 'react';

import QuizCard from '../QuizCard';

class MultipleChoiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  checkAnswer() {
    const selectedOption = this.state.selectedOption;

    if (!selectedOption) {
      $.snackbar({ content: 'No seleccionaste ninguna respuesta' });
    } else {
      if (this.props.options[selectedOption].correct) {
        const content = this.props.options[selectedOption].message || 'Correcto';
        $.snackbar({ content });
      }

      const content = this.props.options[selectedOption].message || 'Incorrecto';
      $.snackbar({ content });
    }
  }

  render() {
    const options = this.props.options.map((option, index) => (
      <div
        className="multiple-choice-option"
        key={`option-${index}`}
      >
        <input
          className="multiple-choice-radio"
          type="radio"
          name="multiple-choice-quiz"
          value={index}
          checked={this.state.selectedOption === `${index}`}
          onChange={this.handleChange}
        />
        <h4 className="multiple-choice-content">{option.content}</h4>
      </div>
    ));

    return (
      <QuizCard
        imageUrl={this.props.imageUrl}
        question={this.props.question}
        options={options}
        checkAnswer={this.checkAnswer}
      />
    );
  }
}

MultipleChoiceCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default MultipleChoiceCard;
