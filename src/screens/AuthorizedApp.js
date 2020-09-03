import React from 'react';
import useAuth from '../utils/hooks/useAuth';

function AuthorizedApp() {
  const { user } = useAuth();
  return <div>{user.name} is Authorized</div>;
}

export default AuthorizedApp;
