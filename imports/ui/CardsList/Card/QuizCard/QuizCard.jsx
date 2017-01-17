import React from 'react';

import Card from '../Card';

const QuizCard = ({
  imageUrl,
  question,
  options,
  checkAnswer,
  index,
  cardsCount,
  cardPassed,
}) => {
  const content =
    (
      <div className="card-body">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="card-img"
          />
        }
        { question &&
          <h2 className="quiz-card-question">
            {question}
          </h2>
        }
        { options &&
          <div className="quiz-card-option">
            {options}
          </div>
        }
        <button onClick={checkAnswer}>Enviar</button>
      </div>
    );
  return (
    <Card
      content={content}
      index={index}
      cardsCount={cardsCount}
      cardPassed={cardPassed}
    />
  );
};

QuizCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string.isRequired,
  options: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
  checkAnswer: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func.isRequired,
};

QuizCard.defaultProps = {
  imageUrl: null,
  question: null,
  options: null,
};

export default QuizCard;
