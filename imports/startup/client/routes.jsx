import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import App from '../../ui/app/App';
import WelcomePage from '../../ui/welcome-page/WelcomePage';
import HomePage from '../../ui/home-page/HomePage';
import CoursePage from '../../ui/course-page/CoursePage';
import LessonPage from '../../ui/lesson-page/LessonPage';
import FeedbackPage from '../../ui/feedback-page/FeedbackPage';

const client = new ApolloClient(meteorClientConfig());

const renderRoutes = () => (
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path="/welcome" component={WelcomePage} />
      <Route onChange={() => { console.log('hola'); }} path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/course/:courseName" component={CoursePage} />
        <Route path="/course/:courseName/:lessonName" component={LessonPage} />
        <Route path="/feedback(/:nextUrl)(/:type)" component={FeedbackPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default renderRoutes;
