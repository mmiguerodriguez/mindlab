import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeRenderer from '../../../../utils/client/CodeRenderer';
import MultipleChoiceCard from './MultipleChoiceCard/MultipleChoiceCard';
import OrderCard from './OrderCard/OrderCard';
import CodeCard from './CodeCard/CodeCard';

class QuizCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnswer: () => {}, // Checks the answer
      answeredCorrectly: false,
    };
    this.handleCheckAnswer = this.handleCheckAnswer.bind(this);
  }

  getQuizContent() {
    let cardType = null;
    switch (this.props.type) {
      case 'multiple-choice':
        cardType = MultipleChoiceCard;
        break;
      case 'order':
        cardType = OrderCard;
        break;
      case 'code':
        cardType = CodeCard;
        break;
      default:
        console.error('cardType not accepted by QuizCard');
        break;
    }
    return React.createElement(cardType, {
      ...this.props,
      setCheckAnswerFunction: (checkAnswer => this.setState({ checkAnswer })),
    });
  }

  handleCheckAnswer() {
    // if the answer is correct
    if (this.state.checkAnswer()) {
      this.setState({
        answeredCorrectly: true,
      });
    }
  }

  render() {
    const imageUrl = this.props.imageUrl;
    const question = this.props.question;
    const quizBody = this.getQuizContent();

    return (
      <div className="card-body">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="card-img"
          />
        }
        { question &&
          <ReactMarkdown
            source={question}
            className="quiz-card-question"
            renderers={{
              ...ReactMarkdown.renderers,
              CodeBlock: CodeRenderer, // used for code-highlighting
            }}
          />
        }
        { quizBody &&
          <div className="quiz-card-body">
            {quizBody}
          </div>
        }
        {
          this.state.answeredCorrectly ?
            <button
              className="btn btn-raised btn-success"
              onClick={this.props.passCard}
            >
              Continuar
            </button> :
            <button
              className="btn btn-raised card-btn-primary"
              onClick={this.handleCheckAnswer}
            >
              Enviar
            </button>
        }
      </div>
    );
  }
}

QuizCard.propTypes = {
  type: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
  passCard: React.PropTypes.func.isRequired,
};

QuizCard.defaultProps = {
  imageUrl: undefined,
  question: undefined,
  options: undefined,
  cardPassed: () => {},
};

export default QuizCard;
