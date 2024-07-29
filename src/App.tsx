import React, { useState } from 'react';
import Router from './prestation/routes/routes';
import { lightTheme } from './prestation/theme/theme';
import { ThemeProvider } from 'styled-components';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {
  const [theme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </ThemeProvider>
  );
}

export default App;
