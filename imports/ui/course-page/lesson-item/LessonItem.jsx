import React from 'react';
import { browserHistory } from 'react-router';

class LessonItem extends React.Component {
  constructor(props) {
    super(props);

    this.showEndAnimation = this.showEndAnimation.bind(this);
  }

  showEndAnimation() {
    // TODO: Change to real id
    const $lessonId = $(`#lesson-${this.props.lessonName.replace(/ /g, '-')}`);
    // First, we remove the lines between the lesson items
    $('.lesson-item > hr').addClass('animated fadeOut');
    // All lesson items but the selected fade out to the left
    $('#course-page-lessons-list > .lesson-item').not($lessonId).addClass('animated fadeOutLeft');
    // The selected lesson item fade out to the right
    $lessonId.addClass('animated fadeOutRight');
    // When the animation finishes, we redirect to the lesson url
    $lessonId.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', (data) => {
      // This will be triggered twice, first with the hr fade out and then
      // with the lesson items fade out
      if (data.target.localName !== 'hr') {
        browserHistory.push(`/course/${this.props.courseName}/${this.props.lessonName}`);
      }
    });
  }

  render() {
    // TODO: Change to real id
    const lessonId = `lesson-${this.props.lessonName.replace(/ /g, '-')}`;

    return (
      <div className="lesson-item" id={lessonId}>
        <a onClick={this.showEndAnimation} className="btn">
          <div className="lesson-item-icon">
            <i className="material-icons">{this.props.icon}</i>
          </div>
          <h4 className="lesson-item-name">
            {this.props.lessonName}
          </h4>
        </a>
        <hr />
      </div>
    );
  }
}

LessonItem.propTypes = {
  courseName: React.PropTypes.string.isRequired,
  lessonName: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
};

export default LessonItem;
