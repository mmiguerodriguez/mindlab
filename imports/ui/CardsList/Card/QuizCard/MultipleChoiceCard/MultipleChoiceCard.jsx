import React from 'react';
import ReactMarkdown from 'react-markdown';

class MultipleChoiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentWillMount() {
    this.props.setCheckAnswerFunction(this.checkAnswer);
  }

  handleChange(event) {
    this.setState({
      selectedOption: parseInt(event.target.value, 10),
    });
  }

  checkAnswer() {
    const selectedOption = this.state.selectedOption;
    // selectedOption can be 0
    if (selectedOption === null) {
      $.snackbar({ content: 'No seleccionaste ninguna respuesta' });
    } else if (!this.props.options[selectedOption].correct) {
      const content = this.props.options[selectedOption].message || 'Incorrecto';
      $.snackbar({ content });
    } else {
      const content = this.props.options[selectedOption].message || 'Muy bien!';
      $.snackbar({ content });

      // TODO: continue to the next card
    }
  }

  render() {
    const optionsArray =
      (
        <div className="multiple-choice-card-options">
          {
            this.props.options.map((option, index) => (
              <div
                className="multiple-choice-card-option radio"
                key={`option-${index}`}
              >
                <label>
                  <input
                    className="multiple-choice-card-radio"
                    type="radio"
                    name="multiple-choice-card-quiz"
                    value={index}
                    checked={this.state.selectedOption === index}
                    onChange={this.handleChange}
                  />
                  <ReactMarkdown
                    source={option.content}
                    className="multiple-choice-card-content"
                  />
                </label>
              </div>
            ))
          }
        </div>
      );

    return optionsArray;
  }
}

MultipleChoiceCard.propTypes = {
  options: React.PropTypes.arrayOf(React.PropTypes.shape({
    content: React.PropTypes.string.isRequired,
    message: React.PropTypes.string,
    correct: React.PropTypes.bool,
  })).isRequired,
  setCheckAnswerFunction: React.PropTypes.func.isRequired,
};

MultipleChoiceCard.defaultProps = {
  imageUrl: null,
  cardPassed: () => {},
};

export default MultipleChoiceCard;

/* global $ */
