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
      </div>
    </div>
  );
}

export default LandingScreen;
