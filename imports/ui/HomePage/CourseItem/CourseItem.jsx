import React from 'react';
import { browserHistory } from 'react-router';

class CourseItem extends React.Component {
  constructor(props) {
    super(props);

    this.showEndAnimation = this.showEndAnimation.bind(this);
  }

  showEndAnimation() {
    // TODO: Change to real id
    const $courseId = $(`#course-${this.props.name.substr(0, 2)}`);
    // The course item selected will fade out, the previous ones will fade out
    // up and the next ones will fade out down
    $courseId.prevAll().addClass('fast-animated animated fadeOutUp');
    $courseId.nextAll().addClass('fast-animated animated fadeOutDown');
    $courseId.addClass('fast-animated animated zoomOut');
    // When the animation finishes, we redirect to the course url
    $('#home-page-courses-list').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
      browserHistory.push(this.props.courseUrl);
    });
  }

  render() {
    // TODO: Change to real id
    const courseId = `course-${this.props.name.substr(0, 2)}`;
    const courseItemImgStyle = { backgroundImage: `url(${this.props.imageUrl})` };
    
    return (
      <div className="course-item animated fadeInUp" id={courseId}>
        <div className="course-item-img" style={courseItemImgStyle} />
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
  imageUrl: React.PropTypes.string.isRequired,
  courseUrl: React.PropTypes.string.isRequired,
};

export default CourseItem;
