import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Feedback = new Mongo.Collection('Feedback');

export default Feedback;
