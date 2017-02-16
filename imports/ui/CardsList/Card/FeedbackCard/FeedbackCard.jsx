import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link, browserHistory } from 'react-router';

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

    if (!description) {
      $.snackbar({ content: 'La descripción debe tener contenido.' });
    } else {
      this.props.mutate({
        variables: {
          description,
          email,
        },
      })
      .then((/* { data } */) => {
        // data inserted correctly
        // data.addFeedback to get _id
        $.snackbar({ content: '¡Muchas gracias! La sugerencia se envió correctamente' });
        browserHistory.push(decodeURIComponent(this.props.nextUrl));
      })
      .catch((error) => {
        console.error(error);
      });
    }
  }

  render() {
    return (
      <div className="card-body">
        { this.props.title &&
          <h2>
            {this.props.title}
          </h2>
        }
        { this.props.text &&
          <p className="card-text">
            {this.props.text}
          </p>
        }
        <div className="form-group label-floating feedback-card-input is-empty">
          <label htmlFor="description" className="control-label">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            onKeyDown={e => this.onKeyDown(e, 'description')}
          />
        </div>
        <div className="form-group label-floating feedback-card-input is-empty">
          <label htmlFor="email" className="control-label">Email (opcional)</label>
          <input
            className="form-control"
            id="email"
            onKeyDown={e => this.onKeyDown(e, 'email')}
          />
        </div>
        <div className="feedback-card-actions">
          <button className="btn btn-raised card-btn-primary" onClick={this.sendFeedback}>
            Enviar
          </button>
          <Link className="feedback-card-skip" to={decodeURIComponent(this.props.nextUrl)}>
            Omitir
          </Link>
        </div>
      </div>
    );
  }
}

FeedbackCard.propTypes = {
  title: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  nextUrl: React.PropTypes.string,
  mutate: React.PropTypes.func.isRequired,
};

FeedbackCard.defaultProps = {
  nextUrl: '/',
  cardPassed: () => {},
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
