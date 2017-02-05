import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Notifications from '../../../../utils/client/notifications';

class FinishCard extends React.Component {
  componentDidMount() {
    // We wait one second to ask for permission
    setTimeout(() => {
      Notifications.askForPermission(this.props.mutate);
    }, 1000);
    mixpanel.track_links('#finish-card-continue-btn', 'Finished lesson', {
      'Lesson name': this.props.lessonName,
      'Lesson time': Math.floor(Date.now() / 1000) - this.props.lessonTime,
    });
  }

  render() {
    return (
      <div className="card-body">
        { this.props.imageUrl &&
          <div className="card-img-container">
            <img
              src={this.props.imageUrl}
              alt=""
              className="card-img"
            />
          </div>
        }
        { this.props.title &&
          <h2>
            {this.props.title}
          </h2>
        }
        { this.props.text &&
          <h3 className="card-text">
            {this.props.text}
          </h3>
        }
        <button
          className="btn btn-raised card-btn-primary"
          id="finish-card-continue-btn"
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
  lessonName: React.PropTypes.string.isRequired,
  lessonTime: React.PropTypes.number.isRequired,
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
