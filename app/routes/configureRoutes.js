import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from '../containers/App/';
import Main from '../components/Main/';
import Contact from '../components/Contact/';
import JavascriptExperience from '../components/JavascriptExperience/';
import ElectricalExperience from '../components/ElectricalExperience/';


export default function configureRoutes(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="contact" component={Contact} />
        <Route path="javascript_experience" component={JavascriptExperience} />
        <Route path="electrical_experience" component={ElectricalExperience} />
      </Route>
    </Router>
  );
}
