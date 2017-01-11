export const typeDefs = [`
type Feedback {
  title: String!
  description: String!
  email: String
  _id: String!
}

type Keys {
  p256dh: String!
  auth: String!
}

type Subscriber {
  endpoint: String!
  keys: Keys
  _id: String!
}

type Query {
  subscriber(id: String!): Subscriber
  feedback(id: String!): Feedback
}

type Mutation {
  addSubscriber(endpoint: String!, p256dh: String!, auth: String!): Subscriber
  addFeedback(title: String!, description: String!, email: String): Feedback
}

schema {
  query: Query
  mutation: Mutation
}
`];
