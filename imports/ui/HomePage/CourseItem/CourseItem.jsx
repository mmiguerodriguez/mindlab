import React from 'react';
import { Link } from 'react-router'

const CourseItem = ({ name, courseUrl }) =>
  <div className="course-item animated fadeInUp">
    <p className="course-item-name">
      {name}
    </p>

    <Link
      to={courseUrl}
      className="btn btn-success btn-fab course-item-enter-button"
    >
      <i className="material-icons">keyboard_arrow_right</i>
    </Link>
  </div>;

CourseItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  courseUrl: React.PropTypes.string.isRequired,
};
export default CourseItem;
