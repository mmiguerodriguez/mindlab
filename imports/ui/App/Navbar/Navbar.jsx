import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <div className={`navbar navbar-default navbar-fixed-top ${this.props.className}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Diamond Knowledge</Link>
            <Link id="navbar-feedback-button" to="/feedback">Feedback</Link>
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
