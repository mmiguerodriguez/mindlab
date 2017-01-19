import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { browserHistory } from 'react-router';

import Card from '../Card';

class FeedbackCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      email: '',
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.sendFeedback = this.sendFeedback.bind(this);
  }

  onKeyDown(e, index) {
    this.setState({
      [index]: e.target.value,
    });
  }

  sendFeedback() {
    const { description, email } = this.state;

    this.props.mutate({
      variables: {
        description,
        email,
      },
    })
    .then(({ data }) => {
      // data inserted correctly
      // data.addFeedback to get _id
      $.snackbar({ content: '¡Muchas gracias! La sugerencia se envió correctamente' });
      browserHistory.push(decodeURIComponent(this.props.nextUrl));
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const content =
      (
        <div className="card-body">
          <h2>{this.props.title}</h2>
          <div className="form-group label-floating feedback-card-input is-empty">
            <label htmlFor="description" className="control-label">Descripción</label>
            <textarea
              className="form-control"
              id="description"
              onKeyDown={e => this.onKeyDown(e, 'description')}
            />
          </div>
          <div className="form-group label-floating feedback-card-input is-empty">
            <label htmlFor="email" className="control-label">Email</label>
            <input
              className="form-control"
              id="email"
              onKeyDown={e => this.onKeyDown(e, 'email')}
            />
          </div>
          <div>
            <button className="btn btn-raised card-btn-primary" onClick={this.sendFeedback}>
              Enviar
            </button>
          </div>
        </div>
      );
    return (
      <Card
        content={content}
        index={this.props.index}
        cardsCount={this.props.cardsCount}
        cardPassed={this.props.cardPassed}
      />
    );
  }
}

FeedbackCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  nextUrl: React.PropTypes.string.isRequired,
  mutate: React.PropTypes.func.isRequired,
  index: React.PropTypes.number.isRequired,
  cardsCount: React.PropTypes.number.isRequired,
  cardPassed: React.PropTypes.func,
};

FeedbackCard.defaultProps = {
  cardPassed: null,
};

const addFeedback = gql`
  mutation addFeedback($description: String!, $email: String) {
    addFeedback(description: $description, email: $email) {
      _id
    }
  }
`;

const FeedbackCardWithMutation = graphql(addFeedback)(FeedbackCard);

export default FeedbackCard = FeedbackCardWithMutation;
