import React from 'react';
import { Link } from 'react-router'

class ProgressBar extends React.Component {
  render() {
    const progressStyle = {
      width: `${this.props.progress}%`,
      // This determines the width of the progressBar that will be changing
    };
    return (
      <div className="lesson-data">
        <div className="progress">
          <div className="progress-bar progress-bar-info" style={progressStyle}></div>
        </div>
      </div>
    );
  }
}

ProgressBar.propTypes = {
  progress: React.PropTypes.number,
};

export default ProgressBar;
