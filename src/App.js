import React from 'react';

import './styles/main.css';

import LoginScreen from './screens/Login';

export default App;

// Entry Point to the Application
function App() {
  // Authorized App or UnAuthorized App
  return <LoginScreen />;
}
