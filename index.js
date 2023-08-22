/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { store } from './app/store'
import { Provider } from 'react-redux'

AppRegistry.registerComponent(appName, () => App);
