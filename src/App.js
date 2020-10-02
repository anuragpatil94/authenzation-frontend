import React from 'react';

import './styles/main.css';

import { useAuth } from './utils/hooks';
import AuthorizedApp from './screens/AuthorizedApp';
import UnauthorizedApp from './screens/UnauthorizedApp';

export default App;

// Entry Point to the Application
function App() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <AuthorizedApp /> : <UnauthorizedApp />;
}
