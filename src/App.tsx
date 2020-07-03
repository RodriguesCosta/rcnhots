import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';

import Hooks from './Hooks';
import Routes from './Routes';
import LoadingOverlay from './components/LoadingOverlay';

const App = () => {
  return (
    <Hooks>
      <StatusBar barStyle="light-content" backgroundColor="#1b1146" />
      <Routes />
      <LoadingOverlay />
    </Hooks>
  );
};

export default App;
