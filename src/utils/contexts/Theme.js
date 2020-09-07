import React, { useState, useEffect, useRef } from 'react';
import { THEMES, CONTEXT_DISPLAY_NAMES } from '../../constants';
import ThemeConfig from '../themes';

const ThemeContext = React.createContext();
ThemeContext.displayName = CONTEXT_DISPLAY_NAMES.themeContext;

function ThemeProvider(props) {
  const [theme, setTheme] = useState(THEMES.light);
  const themeSettings = useRef(ThemeConfig.light);
  useEffect(() => {
    themeSettings.current = ThemeConfig[theme];
  }, [theme]);

  const value = { theme, setTheme, themeSettings };

  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeProvider, ThemeContext };
