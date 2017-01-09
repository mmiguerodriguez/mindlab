import React from 'react';

import LessonItem from './LessonItem/LessonItem';

class CoursePage extends React.Component { // TODO: fix $.material.init()
  render() {
    // hardcoded programming lessons
    const lessonsContent = [
      {
        name: 'Introducción',
        icon: 'book',
      },
      {
        name: 'Primeros conceptos',
        icon: 'child_friendly',
      },
      {
        name: 'Lenguages',
        icon: 'language',
      },
    ];

    const lessonsArray = lessonsContent.map(({ name, icon }, index) =>
      <LessonItem
        key={`lesson-item-${index}`}
        name={name}
        icon={icon}
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
