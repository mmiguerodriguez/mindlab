import React from 'react';

import CardsList from '../CardsList/CardsList';

import ProgressBar from './ProgressBar/ProgressBar';

class LessonPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCardGlobalIndex: 0, // The global index of the currently visible
                                 // card
    };

    this.setCurrentCardGlobalIndex = this.setCurrentCardGlobalIndex.bind(this);
    this.getCurrentCardGlobalIndex = this.getCurrentCardGlobalIndex.bind(this);
  }

  setCurrentCardGlobalIndex(currentCardGlobalIndex) {
    this.setState({
      currentCardGlobalIndex,
    });
  }

  getCurrentCardGlobalIndex() {
    return this.state.currentCardGlobalIndex;
  }

  render() {
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
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'finish',
        imageUrl: '/images/welcome/page1.png',
        title: 'Tercera card',
        text: 'asdf asdf hasdhjas hdk ashdf',
      },
      {
        type: 'order',
        question: 'Tercera card',
        options: [{
          content: 'Enchufar licuadora',
          correctPosition: 1,
        },m
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
        <CardsList
          cards={cardsContent}
          lessonUrl={lessonUrl}
          setCurrentCardGlobalIndex={this.setCurrentCardGlobalIndex}
          getCurrentCardGlobalIndex={this.getCurrentCardGlobalIndex}
        />
        <ProgressBar
          progress={(this.state.currentCardGlobalIndex / (cardsContent.length - 2)) * 100}
        />
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
