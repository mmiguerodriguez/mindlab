import { Meteor } from 'meteor/meteor';

const Notifications = {
  PUBLIC_API_KEY: Meteor.settings.public.publicKey,
  worker: null,
  subscribed: false,
  askForPermission() {
    this.registerWorker();
  },
  registerWorker() {
    const self = this;

    if ('serviceWorker' in window.navigator && 'PushManager' in window) {
      window.navigator.serviceWorker
      .register('worker.js')
      .then((worker) => {
        console.log('Service Worker is registered', worker);
    
        self.worker = worker;
        self.initialiseUI();
      })
      .catch((error) => {
        console.error('Service Worker Error', error);
      });
    } else {
      console.warn('Push messaging is not supported');
      // Show error
    }
  },
  initialiseUI() {
    const self = this;

    this.worker.pushManager.getSubscription()
    .then((subscription) => {
      const _subscribed = !(subscription === null);

      self.subscribed = _subscribed;
  
      if (self.subscribed) {
        self.updateUserSubscription(subscription);
      } else {
        self.subscribe();
      }
    });
  },
  subscribe() {
    const self = this;
    const applicationServerKey = this.urlB64ToUint8Array(this.PUBLIC_API_KEY);

    this.worker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: applicationServerKey,
    })
    .then((subscription) => {
      self.updateUserSubscription(subscription);
      self.subscribed = true;
    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
    });
  },
  updateUserSubscription(subscription) {
    // JSON Stringify
    // Set user subscription on server
    // document.querySelector('#data').innerHTML = JSON.stringify(subscription, null, 2);
    console.log(JSON.stringify(subscription));
    
    
    
  },
  urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
};

export default Notifications;
