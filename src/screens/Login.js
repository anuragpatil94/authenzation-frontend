import React from 'react';
import LoginContainer from '../containers/Login';
import { useAuth, useAuthSelector } from '../utils/hooks';

export default Login;

/** LoginScreen
 * TODO: ThemeToggle
 * LoginContainer
 */
function Login() {
  const auth = useAuth();
  const [authType, setAuthType] = useAuthSelector();

  function onSubmit(formData) {
    auth.login({ authType, ...formData });
  }
  return (
    <LoginContainer
      authSelector={{ authType, setAuthType }}
      onSubmit={onSubmit}
    />
  );
}
