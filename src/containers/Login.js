import React from 'react';
import styled from '@emotion/styled/macro';
import LoginForm from './LoginForm';
import AuthSelectorForm from './AuthSelectorForm';

export default LoginContainer;

const StyledLoginContainer = styled.div({
  margin: '0 auto',
  width: '100%',
  maxWidth: '300px',
  padding: '16px',
  border: '1px solid $ccc',
  borderRadius: '4px',
});

function LoginContainer({ onSubmit, authSelector }) {
  return (
    <StyledLoginContainer className="login-container">
      <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
        <span>Auth Method Selector</span>
      </div>
      <AuthSelectorForm authSelector={authSelector} />
      <LoginForm onSubmit={onSubmit} />
    </StyledLoginContainer>
  );
}
