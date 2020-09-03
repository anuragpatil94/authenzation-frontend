import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ThemeProvider } from './Theme';
import { AuthProvider } from './Auth';

const queryConfig = {
  queries: {
    // useErrorBoundary: true,
    refetchOnWindowFocus: false,
    // retry(failureCount, error) {
    //   if (error.status === 404) return false;
    //   else if (failureCount < 2) return true;
    //   else return false;
    // },
  },
};

/**
 * This is where we will add all the App Level Context and Providers
 * 1. ThemeContext which will expose theme variables
 * 2. AuthContext which will expose user, authType, error etc.
 *
 * @param {object} children is the JSX Tree passed to AppProviders
 * * <App/>
 */
function AppProviders({ children }) {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </ReactQueryConfigProvider>
  );
}

export default AppProviders;
