import React from 'react';
import Notifications from '../utils/client/notifications';

class NotificationsTest extends React.Component {
  componentDidMount() {
    Notifications.askForPermission();
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