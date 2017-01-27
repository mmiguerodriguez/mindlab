import React from 'react';
import { browserHistory } from 'react-router';

class LessonItem extends React.Component {
  constructor(props) {
    super(props);

    this.showEndAnimation = this.showEndAnimation.bind(this);
  }

  showEndAnimation() {
    const lessonId = `#lesson-${this.props.name.replace(/ /g, '-')}`;
    // First, we remove the lines between the lesson items
    $('.lesson-item > hr').addClass('animated fadeOut');
    // We add the classes to start the transition of the home page container
    $('#coursepage-lessons-list > .lesson-item').not(lessonId).addClass('animated fadeOutLeft');
    $(lessonId).addClass('animated fadeOutRight');
    // When the animation finishes, we redirect to the course url
    $(lessonId).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', (data) => {
      if (data.target.localName !== 'hr') {
        browserHistory.push(`/course/programacion/${this.props.name}`);
      }
    });
  }

  render() {
    const lessonId = `lesson-${this.props.name.replace(/ /g, '-')}`;

    return (
      <div className="lesson-item" id={lessonId}>
        {/* TODO: prettify url*/ }
        <a onClick={this.showEndAnimation} className="btn">
          <div className="lesson-item-icon">
            <i className="material-icons">{this.props.icon}</i>
          </div>
          <h4 className="lesson-item-name">
            {this.props.name}
          </h4>
        </a>
        <hr />
      </div>
    );
  }
}

LessonItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};

export default LessonItem;
