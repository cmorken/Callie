/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';


const Stack = createStackNavigator();

const App = () => {
	return (
	  <NavigationContainer>
		<Stack.Navigator initialRouteName="Login">
		  <Stack.Screen
		  name="Login"
		  component={LoginScreen}
		  options={{ title: 'Login Page' }}
		  />
		  <Stack.Screen name="Home" component={HomeScreen} />
		  <Stack.Screen name="SignUp" component={SignUpScreen} />
		</Stack.Navigator>
	  </NavigationContainer>
	);
  }

export default App;