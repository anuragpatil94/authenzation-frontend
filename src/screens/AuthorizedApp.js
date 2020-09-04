import React from 'react';
import Dashboard from './Dashboard';
import { Switch, Route } from 'react-router';

function AuthorizedApp() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
    </Switch>
  );
}

export default AuthorizedApp;
