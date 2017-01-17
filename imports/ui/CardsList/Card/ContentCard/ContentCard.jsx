import React from 'react';
import ReactMarkdown from 'react-markdown';

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
    <div className="content-card">
      {imageUrl &&
        <img
          src={imageUrl}
          alt=""
          className="content-card-img"
        />
      }
      {title &&
        <h2 className="content-card-title">
          {title}
        </h2>
      }
      {text &&
        <ReactMarkdown source={text} className="content-card-text" />
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
  text: React.PropTypes.string, // markdown string
  index: React.PropTypes.number,
  cardsCount: React.PropTypes.number,
  cardPassed: React.PropTypes.func,
};

export default ContentCard;
