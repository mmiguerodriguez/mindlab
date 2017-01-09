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
        courseUrl: '/feedback',
      },
    ];
    const coursesArray = coursesContent.map(({ name, description, courseUrl }, index) =>
      <CourseItem
        name={name}
        description={description}
        courseUrl={courseUrl}
        key={`course-item-${index}`}
      />
    );
    return (
      <div id="homepage">
        <div className="fix alert alert-dismissible alert-info">
          <button type="button" className="close" data-dismiss="alert">×</button>
          <strong>Bienvenido a Diamond Knowledge!</strong> Haz click en el uno de los cursos para poder profundizar. (no se que poner)
        </div>
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
