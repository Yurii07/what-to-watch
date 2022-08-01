import { FC } from 'react';
import Navigation from 'config/Navigation';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { UserAuthContextProvider } from 'contexts/UserAuthContext';
import { store } from './store'
import OfflineMode from 'components/OfflineMode';

import 'App.scss'

const App: FC = () => {
  return (
    <BrowserRouter basename='https://whattowatchdeploy.herokuapp.com/'>
      <Provider store={store}>
        <UserAuthContextProvider>
          {navigator.onLine ? <Navigation /> : <OfflineMode />}
        </UserAuthContextProvider>
      </Provider>
    </BrowserRouter>
  )
}

export default App;
