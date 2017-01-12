import React from 'react';

import Card from '../Card';

const QuizCard = ({ imageUrl, question, options, checkAnswer, index, cardsCount }) => {
  const content =
    (
      <div className="quiz-card">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="quiz-card-img"
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
    <Card content={content} index={index} cardsCount={cardsCount} />
  );
};

QuizCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.arrayOf(React.PropTypes.object),
  checkAnswer: React.PropTypes.func,
  index: React.PropTypes.number,
  cardsCount: React.PropTypes.number,
};

export default QuizCard;
