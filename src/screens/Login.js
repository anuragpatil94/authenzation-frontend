import React from 'react';
import LoginContainer from '../containers/Login';
import { useAuth } from '../utils/hooks';

export default Login;

/** LoginScreen
 * ThemeToggle
 * LoginContainer
 */
function Login() {
  const auth = useAuth();
  function onSubmit(formData) {
    auth.login(formData);
  }
  return (
    <div>
      <div>
        <LoginContainer onSubmit={onSubmit} />
      </div>
    </div>
  );
}
