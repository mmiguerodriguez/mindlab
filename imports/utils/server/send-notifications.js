import * as webpush from 'web-push';
import Subscribers from '../../api/subscribers/subscribers';

const sendNotifications = (message) => {
  const subscribers = Subscribers.find().fetch();

  const options = {
    vapidDetails: {
      subject: 'http://www.d14m0nd.slack.com',
      publicKey: Meteor.settings.public.publicKey,
      privateKey: Meteor.settings.private.privateKey,
    },
    TTL: 60 * 60, // 1 hour
  };

  subscribers.forEach((subscriber) => {
    webpush.sendNotification(
      subscriber,
      message,
      options
    );
  });
};

export default sendNotifications;
