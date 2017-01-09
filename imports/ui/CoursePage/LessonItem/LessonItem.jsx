import React from 'react';
import { Link } from 'react-router'

const LessonItem = ({ name, icon, index }) => {
  return (
    <div className="lesson-item">
      <Link to="/course/programacion" className="btn">
        <div className="lesson-item-icon">
          <i className="material-icons">{icon}</i>
        </div>
        <h4 className="lesson-item-name">
          {name}
        </h4>
      </Link>
      <hr />
    </div>
  );
};

LessonItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default LessonItem;
