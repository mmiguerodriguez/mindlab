import React from 'react';
import { browserHistory } from 'react-router';

class CourseItem extends React.Component {
  constructor(props) {
    super(props);

    this.showEndAnimation = this.showEndAnimation.bind(this);
  }

  showEndAnimation() {
    let courseId = $.escapeSelector(`course-${this.props.name}`);
    courseId = `#${courseId}`
    // We add the class to start the transition of the home page container
    $('#homepage-courses-list > .course-item').not(courseId).addClass('animated fadeOutDown');
    $(courseId).addClass('animated fadeOut');
    // When the animation finishes, we redirect to the course url
    $('#homepage-courses-list').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      browserHistory.push(this.props.courseUrl);
    });
  }

  render() {
    const courseId = `course-${$.escapeSelector(this.props.name)}`;
    return (
      <div className="course-item animated fadeInUp" id={courseId}>
        <div className="course-item-img" />
        <div className="course-item-info">
          <p className="course-item-name">
            {this.props.name}
          </p>
          <p className="course-item-description">
            {this.props.description}
          </p>
        </div>
        <button
          className="btn btn-success btn-fab course-item-enter-button"
          onClick={this.showEndAnimation}
        >
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
      </div>
    );
  }
}

CourseItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  courseUrl: React.PropTypes.string.isRequired,
};

export default CourseItem;
