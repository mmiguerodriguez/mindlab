import React from 'react';
import { browserHistory } from 'react-router';

class WelcomeItem extends React.Component {
  constructor(props) {
    super(props);

    this.showEndAnimation = this.showEndAnimation.bind(this);
  }

  showEndAnimation(elementId, event) {
    const element = document.getElementById(elementId);
    const diagonalWindowSize = Math.sqrt(
      (window.innerWidth ** 2) + (window.innerHeight ** 2));
    // We disable animations temporarily
    element.style.transitionProperty = 'none';
    // And prepare the circle
    element.style.height = '0px';
    element.style.width = '0px';
    // We set the top and left of the circle at the click position
    element.style.top = `${event.clientY}px`;
    element.style.left = `${event.clientX +
                            ((this.props.pagesCount - 1) * window.innerWidth)}px`;
    // We draw the circle with animations inside a setTimeout to
    // give time for the previous modifications to finish
    setTimeout(() => {
      // We activate animations
      element.style.transition = 'width 0.45s linear, height 0.45s linear, top 0.45s linear, left 0.45s linear';
      // We resize the radius of the circle to be the same that the diagonal
      // to cover all the screen
      element.style.width = `${diagonalWindowSize}px`;
      element.style.height = `${diagonalWindowSize}px`;
      // We set the circle's position so that the sides have the same remaining
      // space
      element.style.top = `${-(diagonalWindowSize - window.innerHeight) / 2}px`;
      element.style.left = `${((this.props.pagesCount - 1) * window.innerWidth)
                               - ((diagonalWindowSize - window.innerWidth) / 2)}px`;
      // Finally, when the animation finishes, we redirect to homescreen
      setTimeout(() => {
        browserHistory.push('/');
      }, 450);
    }, 50);
  }

  render() {
    return (
      <div className="welcome-item">
        <div className="welcome-image animated fadeInDown">
          <img src={`images/welcome/${this.props.imageUrl}`} alt="" />
        </div>
        <p className="welcome-item-title animated fadeInUp">
          {this.props.title}
        </p>
        {
          this.props.lastItem &&
          <div>
            <button
              className="btn btn-raised btn-primary"
              id="welcome-item-finish-btn"
              onClick={(event) => {
                this.showEndAnimation('welcome-item-finish-element', event);
              }}
            >
              Empezar
            </button>
            <div className="finish-element" id="welcome-item-finish-element" />
          </div>
        }
      </div>
    );
  }
}

WelcomeItem.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  lastItem: React.PropTypes.bool.isRequired,
  pagesCount: React.PropTypes.number.isRequired,
};

export default WelcomeItem;
