import React from 'react';
import ReactMarkdown from 'react-markdown';

import CodeRenderer from '../../../../utils/client/CodeRenderer';

const ContentCard = ({
  imageUrl,
  title,
  text,
}) =>
  <div className="card-body">
    { imageUrl &&
      <div className="card-img-container">
        <img
          src={imageUrl}
          alt=""
          className="card-img"
        />
      </div>
    }
    { title &&
      <h2>
        {title}
      </h2>
    }
    { text &&
      <ReactMarkdown
        source={text}
        className="card-text"
        renderers={{
          ...ReactMarkdown.renderers,
          CodeBlock: CodeRenderer, // used for code-highlighting
        }}
      />
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
