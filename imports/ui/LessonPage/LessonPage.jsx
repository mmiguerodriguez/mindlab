import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
    const progress = 30; // The progress is constantly 30%, but it needs to be changed
    // TODO: add real cards

    /*
    const cardsContent = [
      {
        type: 'content',
        imageUrl: '/images/welcome/page1.png',
        title: 'HOLA',
        text: 'Esto es un texto',
      },
    ];
    // */
    // Get coursePage url from lessonPage url
    const urlSplited = this.props.location.pathname.split('/');
    const lessonUrl = `/${urlSplited[1]}/${urlSplited[2]}`;
    const cardsContent = [
      {
        type: 'code',
        question: 'Esta es la pregunta?',
        possibleResults: [
          {
            result: 'possible answer',
            message: 'capo',
            correct: true,
          },
          {
            result: 'wrong possibility',
            message: 'Nope, la cagaste',
            correct: false,
          },
        ],
      }, /*
      {
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'feedback',
        title: 'give me some feedback',
      },
      {
        type: 'order',
        imageUrl: '/images/welcome/page1.png',
        question: 'Tercera card',
        options: [{
          content: 'cantidadApariciones',
          correctPosition: 2,
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
          correctPosition: 1,
        },
        {
          content: 'Meter ingredientes en la licuadora',
          correctPosition: 2,
        },
        {
          content: 'Licuar',
          correctPosition: 3,
        },
        {
          content: 'Servir licuado en el vaso',
          correctPosition: 4,
        },
        {
          content: 'Tomar el licuado',
          correctPosition: 5,
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
        type: 'content',
        title: 'nuevo stack',
      },*/
    ];
    // */
    return (
      <div>
        <ProgressBar progress={progress} /> {/* ProgressBar component where progress is passed */}
        <CardsList cards={cardsContent} lessonUrl={lessonUrl} />
      </div>
    );
  }
}

LessonPage.propTypes = {
  params: React.PropTypes.shape({
    lessonName: React.PropTypes.string.isRequired,
  }),
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
};

LessonPage.defaultProps = {
  params: null,
};

export default LessonPage;
