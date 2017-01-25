import React from 'react';

import CardsList from '../CardsList/CardsList';

class LessonPage extends React.Component {
  render() {
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
        type: 'feedback',
        title: 'give me some feedback',
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
        type: 'content',
        title: 'nuevo stack',
      },
    ];
    return (
      <CardsList cards={cardsContent} lessonUrl={lessonUrl} />
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
