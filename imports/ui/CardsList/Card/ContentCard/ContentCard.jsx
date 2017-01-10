import React from 'react';

import Card from '../Card';

const ContentCard = ({ imageUrl, title, text }) => {
  const content =
    (
      <div className="content-card">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="content-card-img"
          />
        }
        { title &&
          <h2 className="content-card-title">
            {title}
          </h2>
        }
        { text &&
          <h3 className="content-card-text">
            {text}
          </h3>
        }
      </div>
    );
  return (
    <Card content={content} />
  );
};

ContentCard.propTypes = {
  imageUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default ContentCard;
