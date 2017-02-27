import React from 'react';

import CardsList from '../cards-list/CardsList';

class FeedbackPage extends React.Component {
  componentDidMount() {
    ga('send', 'pageview', `feedback/${this.props.params.nextUrl}/${this.props.params.type}`);
  }

  render() {
    let feedbackTitle;
    if (this.props.params.type === 'new-course') {
      feedbackTitle = '¿Qué curso te gustaría que agreguemos?';
    } else {
      feedbackTitle = '¡Tu sugerencia nos es de gran ayuda!';
    }

    const cardsContent = [{
      type: 'feedback',
      title: feedbackTitle,
      nextUrl: this.props.params.nextUrl || '/',
      hideOmitOption: true,
    }];

    return (
      <div id="feedback-page">
        <CardsList cards={cardsContent} />
      </div>
    );
  }
}

FeedbackPage.propTypes = {
  params: React.PropTypes.shape({
    nextUrl: React.PropTypes.string,
    type: React.PropTypes.string,
  }).isRequired,
};

export default FeedbackPage;
