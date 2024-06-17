import React, { useState } from 'react';
import Router from './routes/routes';
import { darkTheme, lightTheme } from './theme/theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
