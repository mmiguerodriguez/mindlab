import { Meteor }   from 'meteor/meteor';

import { render }   from 'react-dom';
import { browserHistory } from 'react-router';

import renderRoutes from './routes';

// Show WelcomePage only if it's the first time the user visits the site
if (
  !window.localStorage.getItem('hasVisited') ||
  window.localStorage.getItem('hasVisited') === 'false'
) {
  browserHistory.push('/welcome');
}

Meteor.startup(() => {
  render(
    renderRoutes(),
    document.getElementById('app'),
  );
});
