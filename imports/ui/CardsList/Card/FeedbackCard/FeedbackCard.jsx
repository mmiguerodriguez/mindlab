import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <h2>Tu sugerencia nos es de gran ayuda</h2>
        <p>Descripcion</p>
        <textarea
          className="form-control"
          onKeyDown={e => this.onKeyDown(e, 'description')}
        />
        <p>Email</p>
        <input
          className="form-control"
          onKeyDown={e => this.onKeyDown(e, 'email')}
        />
        <button onClick={this.sendFeedback}>Enviar</button>
      </div>
    );
  }
}

FeedbackCard.propTypes = {
  mutate: React.PropTypes.func.isRequired,
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

export default FeedbackCardWithMutation;
