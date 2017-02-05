import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Subscribers = new Mongo.Collection('Subscribers');

export default Subscribers;
