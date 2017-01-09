import Notifications from './notifications/notifications';

export const typeDefs = [`
type Keys {
  p256dh: String!
  auth: String!
}

type Notification {
  endpoint: String!
  keys: Keys
  _id: String!
}

type Query {
  notification(id: String!): Notification
}

type Mutation {
  addNotification(endpoint: String!, p256dh: String!, auth: String!): Notification
}

schema {
  query: Query
}
`];

export const resolvers = {
  Query: {
    notification(_, args) {
      return Notifications.findOne(args.id);
    },
  },
  Mutation: {
    addNotification(_, args) {
      const { endpoint, p256dh, auth } = args;
      const notification = {
        endpoint,
        keys: {
          p256dh,
          auth,
        }
      };
      console.log(notification);
    
      const notificationId = Notifications.insert(notification);
      return Notifications.findOne(notificationId);
    }
  }
};
