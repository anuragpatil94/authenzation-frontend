import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginScreen from './Login';
import LandingScreen from './Landing';
import RegisterScreen from './Register';
import ForgetPasswordScreen from './ForgetPassword';

function UnauthorizedApp() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingScreen} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/forget-password" component={ForgetPasswordScreen} />
      </Switch>
    </div>
  );
}

export default UnauthorizedApp;
