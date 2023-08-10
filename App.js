import React from 'react';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './src/components/Dashboard';
import LocationTracker from './src/Screens/LocationPermission';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <React.Fragment>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LocationTracker"
            component={LocationTracker}
            options={{
              title: 'LocationTracker',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: 'Dashboard',
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
