import { Meteor } from 'meteor/meteor';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import App from '../imports/ui/App/App';
import WelcomePage from '../imports/ui/WelcomePage/WelcomePage';
import HomePage from '../imports/ui/HomePage/HomePage';
import CardsList from '../imports/ui/CardsList/CardsList';
import CoursePage from '../imports/ui/CoursePage/CoursePage';
import LessonPage from '../imports/ui/LessonPage/LessonPage';
import FeedbackPage from '../imports/ui/FeedbackPage/FeedbackPage';

import './main.scss';

const client = new ApolloClient(meteorClientConfig());

/* Show WelcomePage only if it's the first time the user visits the site
if (
  !localStorage.getItem('hasVisited') ||
  localStorage.getItem('hasVisited') === 'false'
) {
  browserHistory.push('/welcome');
}*/

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/" component={App}>
          <IndexRoute component={HomePage} />
          <Route path="/course/:courseName" component={CoursePage} />
          <Route path="/course/:courseName/:lessonName" component={LessonPage} />
          <Route path="/lesson" component={CardsList} />
          <Route path="/feedback" component={FeedbackPage} />
        </Route>
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  );
});
