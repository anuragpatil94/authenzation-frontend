import React, { useState, useEffect, useCallback } from 'react';
import auth from '../auth';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

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
