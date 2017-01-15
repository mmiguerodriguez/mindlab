import React from 'react';
import CardsList from '../CardsList/CardsList';
import {
  IntroduccionLesson,
  PrimerosConceptosLesson,
  LenguajesLesson
} from './HardcodedCourseContent';

class LessonPage extends React.Component {
  render() {
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

export default LessonPage;
