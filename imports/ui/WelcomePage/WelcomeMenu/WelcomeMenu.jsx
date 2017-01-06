import React from 'react';
import { browserHistory } from 'react-router';

/**
 * WelcomeMenu: renders menu on the bottom of welcome page
 * @param {Integer} pagesCount      Quantity of items in welcomePage
 * @param {Integer} currentPosition Index of currently selected item
 */

 /**
  * goToHomescreen: sets hasVisited to true in localStorage and
  * redirects to homescreen
  */
const goToHomescreen = () => {
  localStorage.setItem('hasVisited', true);
  browserHistory.push('/');
};

class WelcomeMenu extends React.Component {
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
      const element = document.getElementById(elementId);
      // element.style.height = '5000px';
      const diagonalWindowSize = Math.sqrt(
        Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
      );
      // We disable animatios temporarily
      element.style.transitionProperty = 'none';
      // And prepare the circle (it will be out of sight)
      element.style.transform = `translate(-${diagonalWindowSize}px, ${diagonalWindowSize}px)`;
      element.style.width = `${diagonalWindowSize}px`;
      // We draw the circle with animations inside a setTimeout to
      // give time for the previous modifications to finish
      setTimeout(() => {
        element.style.transition = 'width 0.75s linear, height 0.75s linear';
        element.style.width = `${diagonalWindowSize * 2}px`;
        // Finally, when the animation finishes, we redirect to homescreen
        setTimeout(goToHomescreen, 750);
      });
    });
  }

  render() {
    const pageBubblesArray = new Array(this.props.pagesCount) // prepare the array
      .fill(true) // every element needs to be defined to be executed in the map
      .map((_, index) =>
        <div
          key={index}
          className={this.props.currentPosition === index ?
            'page-bubble-active' : 'page-bubble'
          }
        />
      );
    return (
      <div id="welcome-menu">
        <div className="welcome-menu-item">
          {
            !this.state.finished ?
              <button
                className="btn"
                onClick={() => {
                  this.showEndAnimation('welcome-menu-finish-element');
                }}
              >
                SALTAR
              </button> :
                <div id="welcome-menu-finish-element" className="finish-element" />
          }
        </div>
        <div className="welcome-menu-item">
          <div id="bubbles-container">
            {pageBubblesArray}
          </div>
        </div>
        <div className="welcome-menu-item">
          <button className="btn" id="welcome-menu-next-button"> &gt; </button> {/* > */}
        </div>
      </div>
    );
  }
}

WelcomeMenu.propTypes = {
  pagesCount: React.PropTypes.number.isRequired,
  currentPosition: React.PropTypes.number.isRequired,
};

export default WelcomeMenu;
