import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router';

import auth from '../auth';
import { CONTEXT_DISPLAY_NAMES } from '../../constants';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = React.createContext();
AuthContext.displayName = CONTEXT_DISPLAY_NAMES.authContext;

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [, setAccessToken] = useLocalStorage('accessToken', '');
  const [, setRefreshToken] = useLocalStorage('refreshToken', '');
  const [, setAuthType] = useLocalStorage('authType', 'basic');
  const history = useHistory();

  // Auth Functions
  const login = useCallback(
    form =>
      auth
        .login(form)
        .then(({ success, data }) => {
          if (success) {
            const { authType } = data;
            if (authType === 'basic') {
              const { UserId, FirstName, LastName } = data.user;
              setUser({ UserId, FirstName, LastName });
            } else if (authType === 'JWT') {
              setAuthType(authType);
              setAccessToken(data.tokens.accessToken);
              setRefreshToken(data.tokens.refreshToken);
            }
            setIsAuthenticated(true);
            history.push('/');
          }
        })
        .catch(err => console.log(err)),
    [setAccessToken, setRefreshToken, history, setAuthType, setIsAuthenticated],
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
    setAccessToken('');
    setRefreshToken('');
    setIsAuthenticated(false);
  }, [setUser, setAccessToken, setRefreshToken, setIsAuthenticated]);

  const value = React.useMemo(
    () => ({
      user,
      isAuthenticated,
      login,
      logout,
      register,
    }),
    [user, login, logout, register, isAuthenticated],
  );

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };
