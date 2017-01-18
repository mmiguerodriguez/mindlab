import React from 'react';

import CardsList from '../CardsList/CardsList';

const FeedbackPage = () => {
  const cardsContent = {
    type: 'feedback',
  };

  return (
    <div>
      <CardsList cards={cardsContent} />
    </div>
  );
};

export default FeedbackPage;
