import React from 'react';

const WelcomeItem = ({ imageUrl, title, description }) =>
  <div className="welcome-item">
    <div className="welcome-image">
      <img src={`images/welcome/${imageUrl}`} alt="" />
    </div>
    <h3 className="welcome-item-title">
      {title}
    </h3>
    <h4 className="welcome-item-description">
      {description}
    </h4>
  </div>;

WelcomeItem.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default WelcomeItem;
