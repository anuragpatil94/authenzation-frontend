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

export { ThemeProvider, ThemeContext };
