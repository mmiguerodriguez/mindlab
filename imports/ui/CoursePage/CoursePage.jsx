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
        name: 'Lenguajes',
        icon: 'language',
      },
    ];

    const lessonsArray = lessonsContent.map(({ name, icon }, index) =>
      <LessonItem
        key={`lesson-item-${index}`}
        name={name}
        icon={icon}
      />
    );
    return (
      <div id="course-page" className="animated zoomIn">
        <div id="course-page-lessons-list">
          {lessonsArray}
        </div>
      </div>
    );
  }
}

export default CoursePage;
