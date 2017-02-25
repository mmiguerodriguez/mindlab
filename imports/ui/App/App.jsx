import React from 'react';

import Navbar from './Navbar/Navbar';

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      ga('create', 'UA-91442900-2'); // Testing Google Analytics
    } else {
      // ga('create', 'UA-91442900-2'); TODO: fill this with the real id
    }
    ga('send', 'pageview');
  }

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
