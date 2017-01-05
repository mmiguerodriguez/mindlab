import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Notifications = new Mongo.Collection('Notifications');

export default Notifications;
