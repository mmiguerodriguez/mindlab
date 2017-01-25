import React from 'react';
import { browserHistory } from 'react-router';

class CourseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      finished: false,
    };

    this.showEndAnimation = this.showEndAnimation.bind(this);
  }

  showEndAnimation(elementId) {
    this.setState({
      finished: true,
    }, () => {
      const button = document.getElementById(`btn-${this.props.courseUrl}`);
      const element = document.getElementById(elementId);

      const diagonalWindowSize = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2),
      );
      // We disable animatios temporarily
      element.style.transitionProperty = 'none';
      // And prepare the circle
      element.style.top = `${button.offsetTop + (button.offsetHeight / 2)}px`;
      element.style.left = `${button.offsetLeft + (button.offsetWidth / 2)}px`;
      element.style.width = '0px';
      element.style.height = '0px';
      // We draw the circle with animations inside a setTimeout to
      // give time for the previous modifications to finish

      setTimeout(() => {
        element.style.transition = 'width 75s linear, height 75s linear, top 75s linear, left 75s linear';
        element.style.top = `-${diagonalWindowSize / 2}px`;
        element.style.left = `-${diagonalWindowSize / 2}px`;
        element.style.width = `${diagonalWindowSize * 2}px`;
        element.style.height = `${diagonalWindowSize * 2}px`;
        // Finally, when the animation finishes, we redirect to homescreen
        setTimeout(() => {
          browserHistory.push(this.props.courseUrl);
        }, 75000);
      });
    });
  }

  render() {
    return (
      <div className="course-item animated fadeInUp">
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
          id={`btn-${this.props.courseUrl}`}
          onClick={() => {
            this.showEndAnimation('home-page-finish-element');
          }}
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
