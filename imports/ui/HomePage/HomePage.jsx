import React from 'react';

import CourseItem from './CourseItem/CourseItem';

class HomePage extends React.Component {
  render() {
    const coursesContent = [
      {
        name: 'Programación',
        description: 'Vas a poder aprender a programar y a dominar cualquier lenguaje',
        imageUrl: '/images/courses/programming.svg',
        courseUrl: '/course/Programación',
      },
      {
        name: 'Alimentación saludable',
        description: 'Mejorá tu alimentación para vivir más, bajar de peso y verte y sentirte mejor.',
        imageUrl: '/images/courses/programming.svg',
        courseUrl: '/course/Alimentación',
      },
      {
        name: 'Qué curso te gustaría que agreguemos?',
        description: 'Necesitamos tu ayuda para poder seguir creciendo',
        imageUrl: '/images/courses/feedback.png',
        courseUrl: '/feedback/%2F/new-course',
      },
    ];
    const coursesArray = coursesContent.map(({ name, description, imageUrl, courseUrl }, index) =>
      <CourseItem
        name={name}
        description={description}
        imageUrl={imageUrl}
        courseUrl={courseUrl}
        key={`course-item-${index}`}
      />,
    );
    return (
      <div>
        <div id="home-page">
          <div id="home-page-courses-list">
            {
              coursesArray
            }
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
