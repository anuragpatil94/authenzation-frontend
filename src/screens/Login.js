import React from 'react';
import LoginContainer from '../containers/Login';
import { useAuth, useAuthSelector } from '../utils/hooks';

export default Login;

/** LoginScreen
 * ThemeToggle
 * LoginContainer
 */
function Login() {
  const auth = useAuth();
  const [authType, setAuthType] = useAuthSelector();

  function onSubmit(formData) {
    auth.login({ authType, ...formData });
  }
  return (
    <div>
      <div>
        <LoginContainer
          authSelector={{ authType, setAuthType }}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}
