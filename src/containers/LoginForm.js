import React from 'react';
import { Input, Button } from '../components';

export default LoginForm;

function LoginForm({ onSubmit }) {
  const handleSubmit = event => {
    event.preventDefault();
    const { username, password } = event.target.elements;

    onSubmit({
      Username: username.value,
      Password: password.value,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          type="text"
          placeholder="Username"
          autoComplete="off"
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
        />
        <Button type="submit" variant="primary">
          Login
        </Button>
        <Button type="submit" variant="secondary">
          Login with Random User
        </Button>
        <Button variant="_secondary">Forgot Password</Button>
      </form>
    </>
  );
}
