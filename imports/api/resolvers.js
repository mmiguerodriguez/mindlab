import Subscribers from './subscribers/subscribers';

export const resolvers = {
  Query: {
    subscriber(_, args) {
      return Subscribers.findOne(args.id);
    },
  },
  Mutation: {
    addSubscriber(_, args) {
      const { endpoint, p256dh, auth } = args;
      const subscriber = {
        endpoint,
        keys: {
          p256dh,
          auth,
        }
      };
      
      if (!Subscribers.findOne({ endpoint })) {
        const subscriptionId = Subscribers.insert(subscriber);
        return Subscribers.findOne(subscriptionId);
      }

      return;
    }
  }
};
