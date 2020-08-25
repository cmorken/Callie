/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';

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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1e90ff'
	},
	signup: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1e90ff',
		padding: 15,
		width: "45%"
	},
	welcome: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		fontSize: 50,
		color: "#fff",
		fontFamily: "OpenSansCondensed-Light"
	},
	input: {
		width: "90%",
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%"
	},
	userBtn: {
		backgroundColor: "#FFD700",
		padding: 15,
		width: "45%"
	},
	btnText: {
		fontSize: 18,
		textAlign: "center"
	}
});