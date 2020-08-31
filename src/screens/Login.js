import React from 'react';
import LoginContainer from '../containers/Login';

export default Login;

/** LoginScreen
 * ThemeToggle
 * LoginContainer
 */
function Login() {
  function onSubmit({ username, password }) {
    console.log(username, password);
  }
  return (
    <div>
      <LoginContainer onSubmit={onSubmit} />
    </div>
  );
}
