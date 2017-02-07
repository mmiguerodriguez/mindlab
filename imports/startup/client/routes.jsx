import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import App from '../../ui/App/App';
import WelcomePage from '../../ui/WelcomePage/WelcomePage';
import HomePage from '../../ui/HomePage/HomePage';
import CoursePage from '../../ui/CoursePage/CoursePage';
import LessonPage from '../../ui/LessonPage/LessonPage';
import FeedbackPage from '../../ui/FeedbackPage/FeedbackPage';

const client = new ApolloClient(meteorClientConfig());

const renderRoutes = () => (
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/welcome" component={WelcomePage} />
      <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/course/:courseName" component={CoursePage} />
        <Route path="/course/:courseName/:lessonName" component={LessonPage} />
        <Route path="/feedback(/:nextUrl)(/:type)" component={FeedbackPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default renderRoutes;
