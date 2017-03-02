// import { Meteor } from 'meteor/meteor';
// import * as webpush from 'web-push';
// import Subscribers from '../../api/subscribers/subscribers';
const webpush = require('web-push');

const sendNotifications = (message) => {
  const subscribers = [];

  const options = {
    vapidDetails: {
      subject: 'https://mindlab.ga',
      publicKey: 'BO8gDJY0eRIy26XMjhVWcJ1aRunB7ijT7_UTrrs9ul93AApZMy2mZjX-apf2a2Fn_gx8OeqbuOd_oLFuCb5UMhs',
      privateKey: 'GkaPAvBXUGqtRSN0yu8BfvHulIVl-41y5TAgn_ejBqQ',
    },
    TTL: 60 * 60, // 1 hour
  };

  subscribers.forEach((subscriber) => {
    webpush.sendNotification(
      subscriber,
      message,
      options,
    );
  });
};

sendNotifications('Test');

export default sendNotifications;
