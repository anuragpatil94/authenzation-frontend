import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import { Button, Input } from '../components';
import { useAuth } from '../utils/hooks';

export default ForgetPasswordContainer;

const StyledForgetPasswordContainer = styled.div(theme => ({
  width: '50%',
  padding: '10px',
  margin: '0 auto',
  '.submitForgotPassword': {
    margin: '0 auto',
  },
}));

function ForgetPasswordContainer() {
  const auth = useAuth();
  const [isMailSent, userIsMailSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const { username } = event.target.elements;
    auth.forgotPassword({ Username: username.value });
  }

  return (
    <StyledForgetPasswordContainer>
      {!isMailSent ? (
        <form onSubmit={handleSubmit}>
          <h1>Forget Password</h1>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
          <Button className="submitForgotPassword" variant="secondary">
            Submit
          </Button>
        </form>
      ) : (
        'A mail has been sent to you. please continue.'
      )}
    </StyledForgetPasswordContainer>
  );
}
