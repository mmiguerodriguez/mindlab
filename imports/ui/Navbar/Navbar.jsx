import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className={`navbar navbar-default ${this.props.className}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Diamond Knowledge</a>
            <a id="navbar-feedback-button" href="#">Feedback</a>
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  className: React.PropTypes.string,
};

export default Navbar;
