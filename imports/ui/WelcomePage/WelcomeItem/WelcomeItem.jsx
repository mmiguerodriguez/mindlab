import React from 'react';

const WelcomeItem = ({ imageUrl, title, description }) =>
  <div className="welcome-item">
    <div className="welcome-image animated fadeInDown">
      <img src={`images/welcome/${imageUrl}`} alt="" />
    </div>
    <h2 className="welcome-item-title animated fadeInUp">
      {title}
    </h2>
    <h3 className="welcome-item-description animated fadeInUp">
      {description}
    </h3>
  </div>;

WelcomeItem.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default WelcomeItem;
