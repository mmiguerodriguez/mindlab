import React from 'react';
import { Link, browserHistory } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToFeedback = this.redirectToFeedback.bind(this);
  }

  redirectToFeedback() {
    browserHistory.push(`/feedback/${encodeURIComponent(this.props.currentUrl)}`);
  }

  render() {
    return (
      <div className={`navbar navbar-default navbar-fixed-top ${this.props.className}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Diamond Knowledge</Link>
            { this.props.currentUrl.includes('feedback')
              ? ''
              : <a
                href="#"
                id="navbar-feedback-button"
                onClick={this.redirectToFeedback}
              >
                Feedback
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  className: React.PropTypes.string,
  currentUrl: React.PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  className: undefined,
};

export default Navbar;
