import React from 'react';
import brace from 'brace'; // for react-ace
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/github';

import CharacterRow from './CharacterRow/CharacterRow';

class CodeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      result: {
        content: null,
        error: null,
      }, // the result of the code
      editorInitialized: false, // this.editor is set
    };

    this.onChange = this.onChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  componentWillMount() {
    this.props.setCheckAnswerFunction(this.checkAnswer);
  }

  onChange(newValue) {
    this.setState({ code: newValue });
  }

  /**
   * checks if the code the user entered works, and messages him accordingly
   */
  checkAnswer() {
    let result = null;
    // Function that simply returns the inputs
    const consoleLogReplacement = input => input;
    // Users give the result using console.log
    // so we temporarily save the original console.log function
    // and replace it with our own
    const originalConsoleLog = console.log;
    console.log = consoleLogReplacement;
    // We use try and catch to prevent syntax errors
    try {
      result = eval(this.state.code);
      this.setState({
        result: {
          content: result,
          error: false,
        },
      });
    } catch (error) {
      result = error;
      this.setState({
        result: {
          content: result,
          error: true,
        },
      });
    }
    console.log = originalConsoleLog;
    // Try to find the user's result in the posible results array
    const resultInProps = this.props.possibleResults.find(
      object => object.result === result, // == is desired behaviour
    );

    // if the answer is correct
    if (resultInProps && resultInProps.correct) {
      const content = resultInProps.message || 'Muy bien! Anduvo!';
      $.snackbar({ content });
    } else {
      // answer is Incorrecto
      const defaultAnswer = 'El código no devolvió lo que se esperaba... Probá de nuevo';
      const content = resultInProps ? resultInProps.message || defaultAnswer :
                                      defaultAnswer;
      $.snackbar({ content });
    }
  }

  render() {
    let codeResult = null;
    if (this.state.result.content) {
      if (this.state.result.error) {
        // there was an error in the user's code
        codeResult = `Hay un error en tu código: ${this.state.result.content}`;
      } else {
        codeResult = `Tu código devolvió: ${this.state.result.content}`;
      }
    }

    const editor = (
      <AceEditor
        mode="javascript"
        theme="github"
        name="editor"
        value={this.state.code}
        onChange={this.onChange}
        className="code-editor"
        editorProps={{ $blockScrolling: true }}
        ref={(editorRef) => {
          if (!this.state.editorInitialized) {
            this.editor = editorRef;
            this.setState({
              editorInitialized: true,
            });
          }
        }}
      />
    );

    return (
      <div className="code-card-body">
        {editor}
        <div className="code-card-result">
          {
            codeResult || 'Cuando ejecutes tu código, acá va a aparecer el resultado!'
          }
        </div>
        <CharacterRow editor={this.editor} />
      </div>
    );
  }
}

CodeCard.propTypes = {
  // results array for defining different messages for each result
  possibleResults: React.PropTypes.arrayOf(React.PropTypes.shape({
    result: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]).isRequired,
    message: React.PropTypes.string,
    correct: React.PropTypes.bool, // If this possible result is the correct answer
  })).isRequired,
  setCheckAnswerFunction: React.PropTypes.func.isRequired,
};

export default CodeCard;

/* global $ */
