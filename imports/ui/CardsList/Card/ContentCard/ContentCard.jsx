import React from 'react';

import Card from '../Card';

class ContentCard extends React.Component {
  render() {
    const content =
      <p>holas</p>
    return (
      <Card content={content} />
    );
  }
}

export default ContentCard;
