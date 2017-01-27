import React from 'react';
import ReactMarkdown from 'react-markdown';

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
      <ReactMarkdown source={text} className="content-card-text" />
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
