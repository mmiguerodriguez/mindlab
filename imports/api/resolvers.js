import Subscribers from './subscribers/subscribers';
import Feedback from './feedback/feedback';

const resolvers = {
  Query: {
    subscriber(_, args) {
      return Subscribers.findOne(args.id);
    },
    feedback(_, args) {
      return Feedback.findOne(args.id);
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
        },
      };

      if (!Subscribers.findOne({ endpoint })) {
        const subscriptionId = Subscribers.insert(subscriber);
        return Subscribers.findOne(subscriptionId);
      }
    },
    addFeedback(_, args) {
      const { description, email } = args;
      const feedback = {
        description,
        email,
      };

      const feedbackId = Feedback.insert(feedback);
      return Feedback.findOne(feedbackId);
    },
  },
};

export default resolvers;
