import React from 'react';
import { LinkButton } from '../components/Buttons';

function LandingScreen() {
  return (
    <div>
      <h1>Landing</h1>
      <div>
        <LinkButton to={`/login`}>Login</LinkButton>
        <LinkButton to={`/register`} variant="secondary">
          Register
        </LinkButton>
        <LinkButton to={`/forget-password`} variant="_secondary">
          Forget Password
        </LinkButton>
      </div>
    </div>
  );
}

export default LandingScreen;
