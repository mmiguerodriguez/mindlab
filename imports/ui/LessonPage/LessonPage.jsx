import React from 'react';

import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
    // TODO: add real cards
    const cardsContent = [
      {
        type: 'order',
        imageUrl: '/images/welcome/page1.png',
        question: 'Tercera card',
        options: [{
          content: 'Opción 1',
          step: 1,
        },
        {
          content: 'Opción 2',
          step: 2,
        },
        {
          content: 'Opción 3',
          step: 3,
        }],
      },
      {
        type: 'multiple-choice',
        imageUrl: '/images/welcome/page1.png',
        question: 'Tercera card',
        options: [{
          content: 'Opción 1',
          correct: true,
        },
        {
          content: 'Opción 2',
        },
        {
          content: 'Opción 3',
        }],
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'HOLA',
        text: 'Esto es un texto',
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page2.png',
        title: 'Segunda card',
        text: 'Esto es otro texto, un poco más largo que el anterior',
      },
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'Esto es otro texto, un poco más largo que el anterior, y también que el primero.',
      },
      {
        type: 'order',
      },
      {
        type: 'multiple-choice',
      },
      {
        type: 'content',
        title: 'nuevo stack',
      },
    ];
    return (
      <CardsList cards={cardsContent} />
    );
  }
}

LessonPage.propTypes = {
  params: React.PropTypes.shape({
    lessonName: React.PropTypes.string.isRequired,
  }),
};

LessonPage.defaultProps = {
  params: null,
};

export default LessonPage;
