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
    if (this.props.currentUrl.includes('feedback')) {
      title = 'Sugerencia';
    } else if (this.props.currentUrl === '/') {
      title = 'Lista de cursos';
    } else if (this.props.currentUrl.includes('course')) {
      const urlSplited = this.props.currentUrl.split('/');
      if (urlSplited.length === 4) {
        title = decodeURIComponent(urlSplited[3]);
      } else if (urlSplited.length === 3) {
        if (window.innerWidth < 350) {
          title = decodeURIComponent(urlSplited[2]);
        } else {
          title = `Curso de ${decodeURIComponent(urlSplited[2])}`;
        }
      }
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
                src="/images/welcome/page1.png"
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
