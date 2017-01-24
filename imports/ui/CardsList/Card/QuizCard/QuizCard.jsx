import React from 'react';
import MultipleChoiceCard from './MultipleChoiceCard/MultipleChoiceCard';
import OrderCard from './OrderCard/OrderCard';

class QuizCard extends React.Component {

  getQuizContent() {
    let cardType = null;
    switch (this.props.type) {
      case 'multiple-choice':
        cardType = MultipleChoiceCard;
        break;
      case 'order':
        cardType = OrderCard;
        break;
      default:
        console.error('cardType not accepted by QuizCard');
        break;
    }
    return React.createElement(cardType, { ...this.props });
  }

  render() {
    const imageUrl = this.props.imageUrl;
    const question = this.props.question;
    const checkAnswer = this.props.checkAnswer;
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
  quizBody: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.element),
    React.PropTypes.element,
  ]).isRequired,
  checkAnswer: React.PropTypes.func.isRequired,
};

QuizCard.defaultProps = {
  imageUrl: undefined,
  question: undefined,
  options: undefined,
  cardPassed: () => {},
};

export default QuizCard;
