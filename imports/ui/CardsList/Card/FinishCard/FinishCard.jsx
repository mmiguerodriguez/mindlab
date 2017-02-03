import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Notifications from '../../../../utils/client/notifications';

class FinishCard extends React.Component {
  componentDidMount() {
    Notifications.askForPermission(this.props.mutate);
  }

  render() {
    return (
      <div className="card-body">
        { this.props.imageUrl &&
          <img
            src={this.props.imageUrl}
            alt=""
            className="card-img"
          />
        }
        { this.props.title &&
          <h2 className="content-card-title">
            {this.props.title}
          </h2>
        }
        { this.props.text &&
          <h3 className="content-card-text">
            {this.props.text}
          </h3>
        }
        <button
          className="btn btn-raised card-btn-primary"
          onClick={this.props.passCard}
        >
          Continuar
        </button>
      </div>
    );
  }
}


FinishCard.propTypes = {
  imageUrl: React.PropTypes.string,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  mutate: PropTypes.func.isRequired,
  passCard: PropTypes.func.isRequired,
};

FinishCard.defaultProps = {
  imageUrl: null,
  title: null,
  text: null,
  cardPassed: () => {},
};

const addSubscriber = gql`
  mutation addSubscriber($endpoint: String!, $p256dh: String!, $auth: String!) {
    addSubscriber(endpoint: $endpoint, p256dh: $p256dh, auth: $auth) {
      _id
    }
  }
`;

const FinishCardWithMutation = graphql(addSubscriber)(FinishCard);

export default FinishCard = FinishCardWithMutation;
