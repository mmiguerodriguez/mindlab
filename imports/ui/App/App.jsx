import React from 'react';

import Navbar from './Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="animated fadeInDown" />
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default App;
