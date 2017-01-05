import React from 'react';

class WelcomeMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    pagesCount: React.PropTypes.number.isRequired,
    currentPosition: React.PropTypes.number.isRequired,
  }
  render() {
    const pageBubblesArray = new Array(this.props.pagesCount).fill(
      <div className="page-bubble" />
    );
    //pageBubblesArray[this.props.currentPosition].className = active;
    return (
      <div id="welcome-menu">
        <a>SALTAR</a>
        <div id="bubbles-container">
          {pageBubblesArray}
          
        </div>
        <a>></a>
      </div>
    );
  }
}

export default WelcomeMenu;