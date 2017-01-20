import React from 'react';
import brace from 'brace'; // for react-ace
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';


import QuizCard from '../QuizCard';

class CodeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue) {
    this.setState({ code: newValue });
  }

  checkAnswer() {
    let result = null; // the result of the user's code
    // We use try and catch to prevent syntax errors
    try {
      result = eval(this.state.code);
    } catch (error) {
      result = error;
    }

    console.log(result);
    /*
    ese if (!this.props.options[selectedOption].correct) {
      const content = this.props.options[selectedOption].message || 'Incorrecto';
      $.snackbar({ content });
    } else {
      const content = this.props.options[selectedOption].message || 'Correcto';
      $.snackbar({ content });

      // TODO: continue to the next card
    }
    */
  }

  render() {
    const editor = (
      <AceEditor
        mode="javascript"
        theme="github"
        name="editor"
        value={this.state.code}
        onChange={this.onChange}
        className="code-editor"
        editorProps={{ $blockScrolling: true }}
      />
    );

    return (
      <div>        
        <QuizCard
          question={this.props.task}
          quizBody={editor}
          checkAnswer={this.checkAnswer}
          index={this.props.index}
          cardsCount={this.props.cardsCount}
          cardPassed={this.props.cardPassed}
        />
      </div>
    );
  }
}

CodeCard.propTypes = {
  task: React.PropTypes.string.isRequired,
  // results array for defining different messages for each result
  results: React.PropTypes.arrayOf(React.PropTypes.shape({
    result: React.PropTypes.any.isRequired,
    message: React.PropTypes.string,
    correct: React.PropTypes.bool,
  })).isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func.isRequired,
};

export default CodeCard;
