import { useContext } from 'react';
import { AuthContext } from '../contexts';

function useAuth() {
  // Get User, Status, Error
  const authContext = useContext(AuthContext);

  if (authContext === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return authContext;
}

export default useAuth;
