/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './App';
import {name as appName} from './app.json';
import OwnerMenuView from './Components/OwnerMenuView/OwnerMenuView.js';
import 'react-native-gesture-handler';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#9c1f1f',
    accent: 'dbc500',
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App theme={theme} />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
