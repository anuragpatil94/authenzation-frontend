import React from 'react';
import RegisterContainer from '../containers/Register';
import { useAuth } from '../utils/hooks';

/** RegisterScreen
 * ThemeToggle
 * RegisterContainer
 */
function Register() {
  const auth = useAuth();
  function onSubmit(formData) {
    auth.register(formData);
  }
  return (
    <div>
      <div>
        <RegisterContainer onSubmit={onSubmit} />
      </div>
    </div>
  );
}

export default Register;
