import React from 'react';

import Card from '../Card';

class QuizCard extends React.Component {
  render() {
    const content =
      (
        <div className="quiz-card">
          { this.props.imageUrl &&
            <img
              src={this.props.imageUrl}
              alt=""
              className="quiz-card-img"
            />
          }
          { this.props.question &&
            <h2 className="quiz-card-question">
              {this.props.question}
            </h2>
          }
          { this.props.options &&
            <h3 className="quiz-card-option">
              {this.props.options}
            </h3>
          }

        </div>
      )
    return (
      <Card content={content} index={1} cardsCount={1}/>
    );
  }
}

QuizCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.array,
};


class MultipleChoiceCard extends React.Component {
  render() {
    const options = this.props.options.map((option, index) => {
      return (
        <div>
          <input
            type="radio"
            name="multiple-choice-quiz"
            value={index}
            key={index}
          />
          <h4>{option.text}</h4>
        </div>
      );
    });

    return (
      <QuizCard imageUrl={this.props.imageUrl} question={this.props.question} options={options} />
    );
  }
}

MultipleChoiceCard.propTypes = {
  imageUrl: React.PropTypes.string,
  question: React.PropTypes.string,
  options: React.PropTypes.array,
};

class OrderCard extends React.Component {
  render() {
    return (
      <QuizCard />
    );
  }
}

class MultipleChoiceExample extends React.Component {
  render() {
    const imageUrl = 'http://www.tiffany.com/shared/images/engagement/flawless-diamond.png';
    const question = '¿Qué es un algoritmo?';
    const options = [{
    	text: 'a',
    	correct: true,
    },
    {
    	text: 'b',
    },
    {
    	text: 'c',
    }];

    return (
      <MultipleChoiceCard imageUrl={imageUrl} question={question} options={options} />
    );
  }
}

module.exports = {
  QuizCard,
  MultipleChoiceCard,
  OrderCard,
  MultipleChoiceExample,
};
