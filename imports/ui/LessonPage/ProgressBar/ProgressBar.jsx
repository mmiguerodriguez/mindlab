import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
    // This determines the width of the progressBar that will be changing
  };

  return (
    <div id="progress-bar-container" className="animated fadeInUp">
      <div className="progress" id="progress">
        <div
          className="progress-bar progress-bar-info"
          style={progressStyle}
        />
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: React.PropTypes.number.isRequired,
};

export default ProgressBar;
