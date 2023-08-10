/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackgroundGeolocation from 'react-native-background-geolocation';
import HeadlessTask from './src/Screens/utils/backgroundTask';


AppRegistry.registerComponent(appName, () => App);

BackgroundGeolocation.registerHeadlessTask(HeadlessTask);
