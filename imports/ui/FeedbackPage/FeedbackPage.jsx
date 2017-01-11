import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class FeedbackPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
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
    const { title, description, email } = this.state;

    this.props.mutate({
      variables: {
        title,
        description,
        email,
      }
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
        <h3>Que te gusto y que no</h3>
        <p>Titulo</p>
        <input onKeyDown={(e) => this.onKeyDown(e, 'title')} />
        <p>Descripcion</p>
        <textarea onKeyDown={(e) => this.onKeyDown(e, 'description')} />
        <p>Email</p>
        <input onKeyDown={(e) => this.onKeyDown(e, 'email')} />
        
        <button onClick={this.sendFeedback}>Enviar</button>
      </div>
    );
  }
}

const addFeedback = gql`
  mutation addFeedback($title: String!, $description: String!, $email: String) {
    addFeedback(title: $title, description: $description, email: $email) {
      _id
    }
  }
`;

const withAddFeedback = graphql(addFeedback)(FeedbackPage);

export default FeedbackPage = withAddFeedback;