import React from 'react';
import MultipleChoiceCard from './MultipleChoiceCard/MultipleChoiceCard';
import OrderCard from './OrderCard/OrderCard';
import CodeCard from './CodeCard/CodeCard';

class QuizCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAnswer: () => {}, // Checks the answer
    };
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

  render() {
    const imageUrl = this.props.imageUrl;
    const question = this.props.question;
    const checkAnswer = this.state.checkAnswer;
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
          <h3 className="quiz-card-question">
            {question}
          </h3>
        }
        { quizBody &&
          <div className="quiz-card-body">
            {quizBody}
          </div>
        }
        <button className="btn btn-raised card-btn-primary" onClick={checkAnswer}>Enviar</button>
      </div>
    );
  }
}

QuizCard.propTypes = {
  type: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
};

QuizCard.defaultProps = {
  imageUrl: undefined,
  question: undefined,
  options: undefined,
  cardPassed: () => {},
};

export default QuizCard;
