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
      <div>xD</div>  
    );
  }
}

NotificationsTest.propTypes = {
  mutate: PropTypes.func.isRequired,
};

const addNotification = gql`
  mutation addNotification($notification: Notification!) {
    addNotification(notification: $notification) {
      endpoint
      keys
    }
  }
`;

const withAddNotification = graphql(addNotification)(NotificationsTest);

export default NotificationsTest = withAddNotification;
