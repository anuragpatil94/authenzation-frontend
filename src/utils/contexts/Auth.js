import React, { useState, useCallback } from 'react';
import auth from '../auth';
import { CONTEXT_DISPLAY_NAMES } from '../../constants';

const AuthContext = React.createContext();
AuthContext.displayName = CONTEXT_DISPLAY_NAMES.authContext;

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  // Auth Functions
  const login = useCallback(form => setUser(auth.login(form)), [setUser]);
  const register = useCallback(form => setUser(auth.register(form)), [setUser]);
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
