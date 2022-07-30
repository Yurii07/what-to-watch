import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import React from 'react';
import { UserAuthContextProvider } from 'contexts/UserAuthContext';
import { ThemeProvider, ColorModeProvider } from "@chakra-ui/react"
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider portalZIndex={40}>
      <BrowserRouter>
        <Provider store={store}>
          <UserAuthContextProvider>
            <App />
          </UserAuthContextProvider>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>

  </React.StrictMode>
);

