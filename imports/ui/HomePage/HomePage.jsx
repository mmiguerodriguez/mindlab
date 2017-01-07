import React from 'react';

import CourseItem from './CourseItem/CourseItem';

class HomePage extends React.Component {
  render() {
    const coursesContent = [
      {
        name: 'Programación',
        courseUrl: '/programacion',
      },
      {
        name: 'Qué curso te gustaría que agreguemos?',
        courseUrl: '/feedback',
      },
    ];
    const coursesArray = coursesContent.map(({ name, courseUrl }, index) =>
      <CourseItem
        name={name}
        courseUrl={courseUrl}
        key={`course-item-${index}`}
      />
    );
    return (
      <div className="homepage">
        <div id="homepage-courses-list">
          {
            coursesArray
          }
        </div>
      </div>
    );
  }
}

export default HomePage;
