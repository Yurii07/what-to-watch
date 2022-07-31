import { FC } from 'react';
import Navigation from 'config/Navigation';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserAuthContextProvider } from 'contexts/UserAuthContext';
import { store } from './store'
import OfflineMode from 'components/OfflineMode';

import 'App.scss'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <UserAuthContextProvider>
          <HashRouter basename="/what-to-watch/">
            {navigator.onLine ? <Navigation /> : <OfflineMode />}
          </HashRouter>
        </UserAuthContextProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
