import React from 'react';
import Notifications from '../utils/client/notifications';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class NotificationsTest extends React.Component {
  componentWillMount() {
    
    const addNotification = gql`
      mutation addNotification($notification: Notification!) {
        addNotification(notification: $notification) {
          endpoint
          keys
        }
      }
    `;
    
    const query = graphql(addNotification)(NotificationsTest);
    console.log(query.mutate);
    //Notifications.askForPermission();
  }
  componentDidUpdate(nextProps) {
    console.log(this.props, nextProps);
  }
  render() {
    return (
      <div>
        <div>Notificaciones</div>
        <pre id="data" />
      </div>
    );
  }
}

export default NotificationsTest;