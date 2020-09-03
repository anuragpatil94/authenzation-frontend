import React from 'react';

import './styles/main.css';

import useAuth from './utils/hooks/useAuth';
import AuthorizedApp from './screens/AuthorizedApp';
import UnauthorizedApp from './screens/UnauthorizedApp';

export default App;

// Entry Point to the Application
function App() {
  const { user } = useAuth();
  return user ? <AuthorizedApp /> : <UnauthorizedApp />;
}
