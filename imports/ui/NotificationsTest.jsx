import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Notifications from '../utils/client/notifications';

class NotificationsTest extends Component {
  componentDidMount() {
    Notifications.askForPermission(this.props.mutate);
  }

  render() {
    return (
      <div>Componente para registrar a un worker y pedir permisos de notifaciones</div>  
    );
  }
}

NotificationsTest.propTypes = {
  mutate: PropTypes.func.isRequired,
};

const addNotification = gql`
  mutation addNotification($endpoint: String!, $p256dh: String!, $auth: String!) {
    addNotification(endpoint: $endpoint, p256dh: $p256dh, auth: $auth) {
      _id
    }
  }
`;

const withAddNotification = graphql(addNotification)(NotificationsTest);

export default NotificationsTest = withAddNotification;
