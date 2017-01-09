import * as webpush from 'web-push';
import Notifications from '../../api/notifications/notifications';

const sendNotifications = (message) => {
  const notifications = Notifications.find().fetch();

  const options = {
    vapidDetails: {
      subject: 'http://www.d14m0nd.slack.com',
      publicKey: Meteor.settings.public.publicKey,
      privateKey: Meteor.settings.private.privateKey,
    },
    TTL: 60 * 60, // 1 hour
  };

  notifications.forEach((notification) => {
    webpush.sendNotification(
      notification,
      message,
      options
    );
  });
};

export default sendNotifications;
