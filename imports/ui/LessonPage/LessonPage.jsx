import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
    let progress = 30; // For the moment the progress is constantly 30%, but this have to change
    // TODO: add real cards
    const cardsContent = [
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'HOLA',
        text: 'Esto es un texto',
      },
    ];
    /*
    const cardsContent = [
      {
        type: 'multiple-choice',
        imageUrl: '/images/welcome/page1.png',
        question: 'Tercera card',
        options: [{
          content: 'cantidadApariciones',
          correct: true,
        },
        {
          content: 'vecesQueAparece',
        },
        {
          content: 'numero',
        }],
      },
      {
        type: 'order',
        question: 'Tercera card',
        options: [{
          content: 'Enchufar licuadora',
          step: 1,
        },
        {
          content: 'Meter ingredientes en la licuadora',
          step: 2,
        },
        {
          content: 'Licuar',
          step: 3,
        },
        {
          content: 'Servir licuado en el vaso',
          step: 4,
        },
        {
          content: 'Tomar el licuado',
          step: 5,
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
    */
    return (
      <div>
        <ProgressBar progress={progress} /> {/* ProgressBar component where progress is passed */}
        <CardsList cards={cardsContent} />
      </div>
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
