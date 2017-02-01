import React from 'react';

import CourseItem from './CourseItem/CourseItem';

class HomePage extends React.Component {
  render() {
    const coursesContent = [
      {
        name: 'Programación',
        description: 'Vas a poder aprender a programar y a dominar cualquier lenguaje',
        courseUrl: '/course/programacion',
      },
      {
        name: 'Qué curso te gustaría que agreguemos?',
        description: 'Necesitamos tu ayuda para poder seguir creciendo',
        courseUrl: '/feedback/%2F/new-course',
      },
    ];
    const coursesArray = coursesContent.map(({ name, description, courseUrl }, index) =>
      <CourseItem
        name={name}
        description={description}
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
