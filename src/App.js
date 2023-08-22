import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import RootNavigator from './navigation';
import {store} from './store';

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 100);
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
export default App;
