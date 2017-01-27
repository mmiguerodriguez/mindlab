import React from 'react';

import CardsList from '../CardsList/CardsList';
import {
  IntroduccionLesson,
  PrimerosConceptosLesson,
  LenguajesLesson,
} from './HardcodedCourseContent';

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
    // Get coursePage url from lessonPage url
    const urlSplited = this.props.location.pathname.split('/');
    const lessonUrl = `/${urlSplited[1]}/${urlSplited[2]}`;
    let cardsContent = [];
    switch (this.props.params.lessonName) {
      case 'Introducción':
        cardsContent = IntroduccionLesson;
        break;
      case 'Primeros conceptos':
        cardsContent = PrimerosConceptosLesson;
        break;
      case 'Lenguajes':
        cardsContent = LenguajesLesson;
        break;
      default:
        cardsContent = IntroduccionLesson;
        break;
    }
    return (
      <div className="animated fadeInUp">
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
