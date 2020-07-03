import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home';
import HeroDetails from './pages/HeroDetails';

const RouteStack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <RouteStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RouteStack.Screen name="Home" component={Home} />
        <RouteStack.Screen name="HeroDetails" component={HeroDetails} />
      </RouteStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
