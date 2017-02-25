import React from 'react';

import CardsList from '../cards-list/CardsList';

const FeedbackPage = ({ params }) => {
  let feedbackTitle;
  if (params.type === 'new-course') {
    feedbackTitle = '¿Qué curso te gustaría que agreguemos?';
  } else {
    feedbackTitle = '¡Tu sugerencia nos es de gran ayuda!';
  }

  const cardsContent = [{
    type: 'feedback',
    title: feedbackTitle,
    nextUrl: params.nextUrl || '/',
  }];

  return (
    <div>
      <CardsList cards={cardsContent} />
    </div>
  );
};

FeedbackPage.propTypes = {
  params: React.PropTypes.shape({
    nextUrl: React.PropTypes.string,
    type: React.PropTypes.string,
  }).isRequired,
};

export default FeedbackPage;
