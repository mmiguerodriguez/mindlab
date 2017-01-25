import React from 'react';

import ProgressBar from './ProgressBar/ProgressBar';
import CardsList from '../CardsList/CardsList';
import {
  IntroduccionLesson,
  PrimerosConceptosLesson,
  LenguajesLesson,
} from './HardcodedCourseContent';

class LessonPage extends React.Component {
  render() {
    const progress = 30; // For the moment the progress is constantly 30%, but this have to change
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
      case 'Lenguages':
        cardsContent = LenguajesLesson;
        break;
      default:
        cardsContent = IntroduccionLesson;
        break;
    }
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
