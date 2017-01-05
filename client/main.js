import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import ApolloClient from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import WelcomePage from '/imports/ui/WelcomePage/WelcomePage.jsx';
import HomePage from '/imports/ui/HomePage/HomePage';
import NotificationsTest from '/imports/ui/NotificationsTest';
import CardsList from '/imports/ui/CardsList/CardsList';
import './main.scss';

const client = new ApolloClient(meteorClientConfig());

// Show WelcomePage only if it's the first time the user visits the site
/*if (!localStorage.getItem('hasVisited')) {
  browserHistory.push('/welcome');
}
*/

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path="/" component={HomePage} />
        <Route path="/welcome" component={WelcomePage} />
        <Route path="/test" component={NotificationsTest} />
        <Route path="/lesson" component={CardsList} />
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  );
});