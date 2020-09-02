import { ThemeContext } from '../contexts';
import { useContext } from 'react';

function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme cannot be used outside ThemeProvider');
  }
  const { theme, themeSettings } = themeContext;
  return { theme, themeSettings: themeSettings.current };
}

function useChangeTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('useTheme cannot be used outside ThemeProvider');
  }
  return themeContext;
}

export { useTheme, useChangeTheme };
