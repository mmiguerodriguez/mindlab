export const typeDefs = [`
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
}

type Mutation {
  addSubscriber(endpoint: String!, p256dh: String!, auth: String!): Subscriber
}

schema {
  query: Query
  mutation: Mutation
}
`];
