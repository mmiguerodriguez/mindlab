import React from 'react';

import LessonItem from './LessonItem/LessonItem';

class CoursePage extends React.Component {
  render() {
    // hardcoded programming lessons
    const lessonsContent = [
      {
        name: 'Introducción',
      },
      {
        name: 'Primeros conceptos',
      },
      {
        name: 'Lenguages',
      },
    ];

    const lessonsArray = lessonsContent.map(({ name }, index) =>
      <LessonItem
        key={`lesson-item-${index}`}
        name={name}
        index={index}
      />
    );
    return (
      <div id="coursepage">
        <div id="coursepage-lessons-list">
          {lessonsArray}
        </div>
      </div>
    );
  }
}

export default CoursePage;
