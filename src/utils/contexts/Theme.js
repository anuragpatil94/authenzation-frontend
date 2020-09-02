import React, { useState, useContext, useEffect, useRef } from 'react';
import { THEMES } from '../../constants';
import ThemeConfig from '../themes';

const ThemeContext = React.createContext();
ThemeContext.displayName = 'ThemeContext';

function ThemeProvider(props) {
  const [theme, setTheme] = useState(THEMES.light);
  const themeSettings = useRef(ThemeConfig.light);
  useEffect(() => {
    themeSettings.current = ThemeConfig[theme];
  }, [theme]);

  const value = { theme, setTheme, themeSettings };

  return <ThemeContext.Provider value={value} {...props} />;
}

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

export { ThemeProvider, ThemeContext, useTheme, useChangeTheme };
