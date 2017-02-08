import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeRenderer from '../../../../utils/client/CodeRenderer';
import MultipleChoiceCard from './multiple-choice-card/MultipleChoiceCard';
import OrderCard from './order-card/OrderCard';
import CodeCard from './code-card/CodeCard';

class QuizCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnswer: () => {}, // Checks the answer
      answeredCorrectly: false,
      quizTries: 0, // times the user responded the quiz
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
    const isCorrect = this.state.checkAnswer();
    /* mixpanel.track('Quiz responded', {
      'Lesson name': this.props.lessonName,
      'Card index': this.props.getCurrentCardGlobalIndex(),
      'Answered correctly': isCorrect,
      'Number of try': this.state.quizTries,
    }); */
    this.setState({
      quizTries: this.state.quizTries + 1,
    });
    // if the answer is correct
    if (isCorrect) {
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
              onClick={this.props.slideCard}
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
  lessonName: React.PropTypes.string.isRequired,
  getCurrentCardGlobalIndex: React.PropTypes.func.isRequired,
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
  slideCard: React.PropTypes.func.isRequired,
};

QuizCard.defaultProps = {
  imageUrl: undefined,
  question: undefined,
  options: undefined,
  cardPassed: () => {},
};

export default QuizCard;
