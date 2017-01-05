import Notifications from './notifications/notifications';

export const typeDefs = [`
type Keys {
  p256dh: String
  auth: String
}

type Notification {
  endpoint: String
  keys: Keys
  _id: ID!
}

type Mutation {
  addNotification(notification: Notification): Notification,
}

type Query {
  notification(id: String!): Notification
}

schema {
  query: Query
}
`];

export const resolvers = {
  Query: {
    user(root, args, context) {
      // Only return the current user, for security
      if (context.userId === args.id) {
        return context.user;
      }
    },
  },
  Mutation: {
    addNotification(_, args) {
      const notificationId = Notifications.insert(args.notification);
      return Notifications.findOne(notificationId);
    }
  }
};
