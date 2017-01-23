import React from 'react';

/*
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
*/

const ContentCard = ({
  imageUrl,
  title,
  text,
}) =>
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
  </div>;


ContentCard.propTypes = {
  imageUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
};
ContentCard.defaultProps = {
  imageUrl: null,
  title: null,
  text: null,
  cardPassed: () => {},
};

export default ContentCard;
