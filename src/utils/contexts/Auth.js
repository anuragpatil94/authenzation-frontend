import React, { useState, useCallback } from 'react';
import auth from '../auth';
import { useHistory } from 'react-router';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

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
