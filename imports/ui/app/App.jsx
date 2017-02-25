import React from 'react';

import Navbar from './navbar/Navbar';

class App extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV === 'development') {
      ga('create', 'UA-91442900-2'); // MindLab development
    } else {
      ga('create', 'UA-91442900-3'); // MindLab production
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
