import React from 'react';

/**
 * WelcomeMenu: renders menu on the bottom of welcome page
 * @param {Integer} pagesCount      Quantity of items in welcomePage
 * @param {Integer} currentPosition Index of currently selected item
 */
const WelcomeMenu = ({ pagesCount, currentPosition }) => {
  const pageBubblesArray = new Array(pagesCount) // prepare the array
    .fill(true) // every element needs to be defined to be executed in the map
    .map((_, index) =>
      <div
        key={index}
        className={currentPosition === index ?
          'page-bubble-active' : 'page-bubble'
        }
      />
    );
  return (
    <div id="welcome-menu">
      <div className="welcome-menu-item">
        <a className="btn">SALTAR</a>
      </div>
      <div className="welcome-menu-item">
        <div id="bubbles-container">
          {pageBubblesArray}
        </div>
      </div>
      <div className="welcome-menu-item">
        <a className="btn" id="welcome-menu-next-button"> &gt; </a> {/* > */}
      </div>
    </div>
  );
};

WelcomeMenu.propTypes = {
  pagesCount: React.PropTypes.number.isRequired,
  currentPosition: React.PropTypes.number.isRequired,
};

export default WelcomeMenu;
