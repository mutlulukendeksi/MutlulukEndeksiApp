/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import SplashScreen from "react-native-splash-screen";
import AuthScreen from './screens/AuthScreen';
import DataCalendarScreen from './screens/DataCalendarScreen';
import DataDetailScreen from './screens/DataDetailScreen';
import EmotionFormScreen from './screens/EmotionFormScreen';
import HeatMapScreen from './screens/HeatMapScreen';
import HomeScreen from './screens/HomeScreen';
import LoginFormScreen from './screens/LoginFormScreen';
import RegisterFormScreen from './screens/RegisterFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EmotionForm" component={EmotionFormScreen} />
          <Stack.Screen name="DataCalendar" component={DataCalendarScreen} />
          <Stack.Screen name="DataDetail" component={DataDetailScreen} />
          <Stack.Screen name="HeatMap" component={HeatMapScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Login" component={LoginFormScreen} />
          <Stack.Screen name="Register" component={RegisterFormScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
