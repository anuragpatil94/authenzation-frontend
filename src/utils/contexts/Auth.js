import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';

import auth from '../auth';
import { CONTEXT_DISPLAY_NAMES } from '../../constants';

const AuthContext = React.createContext();
AuthContext.displayName = CONTEXT_DISPLAY_NAMES.authContext;

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const history = useHistory();

  // Auth Functions
  const login = useCallback(
    form =>
      auth
        .login(form)
        .then(({ success, data }) => {
          if (success) {
            const { UserId, FirstName, LastName } = data.user;
            setUser({ UserId, FirstName, LastName });
            history.push('/');
          }
        })
        .catch(err => console.log(err)),
    [history],
  );
  const register = useCallback(
    formData =>
      auth
        .register(formData)
        .then(({ success }) => {
          if (success) history.push('/');
        })
        .catch(err => console.log(err)),
    [history],
  );
  const logout = useCallback(() => {
    auth.logout();
    setUser(null);
  }, [setUser]);

  const value = React.useMemo(
    () => ({
      user,
      login,
      logout,
      register,
    }),
    [user, login, logout, register],
  );

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };
