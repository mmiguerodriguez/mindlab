import Subscribers from './subscribers/subscribers';
import Feedback from './feedback/feedback';

export const resolvers = {
  Query: {
    subscriber(_, args) {
      return Subscribers.findOne(args.id);
    },
    feedback(_, args) {
      return Feedback.findOne(args.id);
    }
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
    },
    addFeedback(_, args) {
      const { title, description, email } = args;
      const feedback = {
        title,
        description,
        email,
      };

      const feedbackId = Feedback.insert(feedback);
      return Feedback.findOne(feedbackId);
    }
  }
};
