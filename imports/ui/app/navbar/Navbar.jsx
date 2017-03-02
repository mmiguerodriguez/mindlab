import React from 'react';
import { browserHistory } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.redirectToFeedback = this.redirectToFeedback.bind(this);
  }

  redirectToFeedback() {
    browserHistory.push(`/feedback/${encodeURIComponent(this.props.currentUrl)}`);
  }

  render() {
    let title;
    // We generate the navbar title depending on the url
    if (this.props.currentUrl.includes('feedback')) {
      // The user is in feedbackPage
      title = 'Sugerencia';
    } else if (this.props.currentUrl.includes('course')) {
      // The user is coursePage or lessonPage
      const urlSplited = this.props.currentUrl.split('/');
      if (urlSplited.length === 4) {
        // The user is in lessonPage
        title = decodeURIComponent(urlSplited[3]);
      } else if (urlSplited.length === 3) {
        // The user is in coursePage
        // We show 'Curso de' in the navbar depending on the width of the screen
        if (window.innerWidth < 350) {
          title = decodeURIComponent(urlSplited[2]);
        } else {
          title = `Curso de ${decodeURIComponent(urlSplited[2])}`;
        }
      }
    } else if (this.props.currentUrl === '/') {
      // The user is in homePage
      title = 'Lista de cursos';
    }

    const feedbackStyle = this.props.currentUrl.includes('feedback')
                          ? { marginRight: '50px' } : {};

    return (
      <div className={`navbar navbar-default navbar-fixed-top ${this.props.className}`}>
        <div className="container-fluid">
          <div className="navbar-header">
            { (this.props.currentUrl.includes('course') ||
              this.props.currentUrl.includes('feedback'))
              ? <a
                onClick={browserHistory.goBack}
              >
                <i className="material-icons" id="navbar-arrow">arrow_back</i>
              </a>
              : <img
                id="navbar-logo"
                alt="logo"
                src="/images/logo.svg"
              />
            }
            <p id="navbar-title" style={feedbackStyle}>{title}</p>
            { !this.props.currentUrl.includes('feedback') &&
              <a
                onClick={this.redirectToFeedback}
              >
                <i className="material-icons" id="navbar-feedback">feedback</i>
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
