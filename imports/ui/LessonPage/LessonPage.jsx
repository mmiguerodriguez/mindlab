import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
    let progress = 30; // For the moment the progress is constantly 30%, but this have to change
    // TODO: add real cards
    // Get coursePage url from lessonPage url
    const urlSplited = this.props.location.pathname.split('/');
    const lessonUrl = `/${urlSplited[1]}/${urlSplited[2]}`;
    const cardsContent = [
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
