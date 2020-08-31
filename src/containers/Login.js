import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled/macro';

export default LoginContainer;

function AuthMethodSelector() {
  return (
    <div style={{ paddingTop: '16px', paddingBottom: '16px' }}>
      <span>Auth Method Selector</span>
    </div>
  );
}

const StyledInput = styled.input({
  width: '100%',
  borderRadius: ' 4px',
  padding: '8px 16px',
  margin: '8px 0',
  border: 'none',
  backgroundColor: '#ccc',
});

const StyledButton = styled.button(
  {
    border: 'none',
    color: 'white',
    display: 'block',
    margin: '8px 0',
    padding: '8px 16px',
    borderRadius: '4px',
  },
  ({ variant }) => {
    switch (variant) {
      case '_secondary':
        return {
          backgroundColor: 'transparent ',
          color: '#333',
          borderBottom: '2px solid #979dac',
          padding: '1px 8px',
          '&:hover': {
            color: '#0353a4',
            borderBottom: '2px solid #0353a4',
          },
        };
      case 'secondary':
        return { backgroundColor: '#7d8597' };
      case 'primary':
      default:
        return { backgroundColor: '#0466c8' };
    }
  },
);

function LoginForm({ onSubmit }) {
  //   const [username, setUsername] = useState(null);
  //   const [password, setPassword] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      username: username.value,
      password: password.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput
          name="username"
          type="text"
          placeholder="Username"
          //   value={username}
          //   onChange={e => setUsername(e.target.value)}
        />
        <StyledInput
          name="password"
          type="password"
          placeholder="Password"
          //   value={password}
          //   onChange={e => setPassword(e.target.value)}
        />
        <StyledButton type="submit" variant="primary">
          Login
        </StyledButton>
        <StyledButton type="submit" variant="secondary">
          Login with Random User
        </StyledButton>
        <StyledButton variant="_secondary">Forgot Password</StyledButton>
      </form>
    </>
  );
}

const StyledLoginContainer = styled.div({
  margin: '0 auto',
  width: '100%',
  maxWidth: '300px',
  padding: '16px',
  border: '1px solid $ccc',
  borderRadius: '4px',
});

function LoginContainer({ onSubmit }) {
  return (
    <StyledLoginContainer className="login-container">
      <AuthMethodSelector />
      <LoginForm onSubmit={onSubmit} />
    </StyledLoginContainer>
  );
}
