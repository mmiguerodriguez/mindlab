import React from 'react';

import Navbar from './Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          className="animated fadeInDown"
          currentUrl={this.props.location.pathname}
        />
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  location: React.PropTypes.shape({
    pathname: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
