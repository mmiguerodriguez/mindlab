import React from 'react';
import { Link } from 'react-router'

const CourseItem = ({ name, description, courseUrl }) =>
  <div className="course-item animated fadeInUp">
    <div className="course-item-img" />
    <div className="course-item-info">
      <p className="course-item-name">
        {name}
      </p>
      <p className="course-item-description">
        {description}
      </p>
    </div>

    <Link
      to={courseUrl}
      className="btn btn-success btn-fab course-item-enter-button"
    >
      <i className="material-icons">keyboard_arrow_right</i>
    </Link>
  </div>;

CourseItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  courseUrl: React.PropTypes.string.isRequired,
};
export default CourseItem;
