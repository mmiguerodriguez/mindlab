// import * as fs from 'fs';
// import * as webpush from 'web-push';

const fs = require('fs');
const webpush = require('web-push');

const sendNotifications = (message) => {
  // Request users from database
  const users = [
    {
      "endpoint": "https://fcm.googleapis.com/fcm/send/fzq90Frx0Vk:APA91bG4myOBAdvB8cT140pvHsz7Pwelq2kzl_xtCJHPNjHD-Py_AqV8ArWxCoAvYjOOi3CwXa7-361cGH2fuekROc68dfA0-xMKTr8Lcu-yAqsbBTa3dm3dUQEl-fjHCjp-u0nSRY_S",
      "keys": {
        "p256dh": "BF-mXY3nppftUinsOI74yvN20QmzqA995BQKtMl6pD6dUNW3hVlcjP9E6SlTifnsh0p_Cz57JeGWgPUOCC6f2E8=",
        "auth": "HyyrbJ4Ge6uGE5q9DsMhaQ=="
      }
    }
  ];

  const options = {
    vapidDetails: {
      subject: 'http://www.diamondcourses.com',
      publicKey: Meteor.settings.public.publicKey,
      privateKey: Meteor.settings.private.privateKey,
    },
    TTL: 60 * 60, // 1 hour
  };

  users.forEach((userInfo) => {
    webpush.sendNotification(
      userInfo,
      message,
      options
    );
  });
};

// sendNotifications('Mensaje de prueba');
