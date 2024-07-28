import React, { useState } from 'react';
import Router from './prestation/routes/routes';
import { lightTheme } from './prestation/theme/theme';
import { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  const [theme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
