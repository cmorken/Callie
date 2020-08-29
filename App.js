/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, ActivityIndicator} from "react-native";
import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';

import { AuthContext } from './components/context';


const Stack = createStackNavigator();

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);
	const [userToken, setUserToker] = React.useState(null);

	const authContext = React.useMemo(() => ({
		signIn: () => {
			setUserToken('fghj');
			setIsLoading(false);
		},
		signOut: () => {
			setUserToken(null);
			setIsLoading(false);
		},
		signUp: () => {
			setUserToken('fghj');
			setIsLoading(false);
		},
	}));

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if( isLoading ) {
		return(
			<View style={{flex:1, justifyContent:'center',slignItems:'center'}}>
				<ActivityIndicator size="large"/>
			</View>
		);
	}
	return (
		<AuthContext.Provider value = {authContext}>
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
	  </AuthContext.Provider>
	);
  }

export default App;