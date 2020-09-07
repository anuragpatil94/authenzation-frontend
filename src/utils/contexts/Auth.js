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
  const login = useCallback(form => auth.login(form).then(() => {}), [setUser]);
  const register = useCallback(
    form =>
      auth.register(form).then(({ id, Username, FirstName, LastName }) => {
        setUser({ id, username: Username, name: `${FirstName} ${LastName}` });
        history.push('/');
      }),
    [setUser],
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
