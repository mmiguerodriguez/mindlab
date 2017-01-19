import React from 'react';

import Card from '../Card';

const ContentCard = ({
  imageUrl,
  title,
  text,
  index,
  cardsCount,
  cardPassed,
}) => {
  const content =
    (
      <div className="card-body">
        { imageUrl &&
          <img
            src={imageUrl}
            alt=""
            className="card-img"
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
    <Card
      content={content}
      index={index}
      cardsCount={cardsCount}
      cardPassed={cardPassed}
    />
  );
};

ContentCard.propTypes = {
  imageUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func,
};
ContentCard.defaultProps = {
  imageUrl: null,
  title: null,
  text: null,
  cardPassed: () => {},
};

export default ContentCard;
