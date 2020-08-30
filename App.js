/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, ActivityIndicator} from "react-native";
import {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';

import { AuthContext } from './components/context';


const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const SignUpStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStackScreen = ({navigation}) => (
	<LoginStack.Navigator>
		  <LoginStack.Screen name="Login" component={LoginScreen} options={{ title: 'Login Page' }}/>
		</LoginStack.Navigator>
);

const HomeStackScreen = ({navigation}) => (
	<HomeStack.Navigator>
		  <HomeStack.Screen name="Home" component={HomeScreen} options={{
			  headerLeft: () => (
				  <Icon.Button name = "ios-menu" size = {25} backgroundColor = "#008B8B"
				  onPress = {() => navigation.openDrawer()}></Icon.Button>
			  )
		   }}/>
		</HomeStack.Navigator>
);

const SignUpStackScreen = ({navigation}) => (
	<SignUpStack.Navigator>
		  <SignUpStack.Screen name="SignUp" component={SignUpScreen} options={{ }}/>
		</SignUpStack.Navigator>
);

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
	  <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={LoginStackScreen} />
        <Drawer.Screen name="Home" component={HomeStackScreen} />
		<Drawer.Screen name="SignUp" component={SignUpStackScreen} />
      </Drawer.Navigator>
		{/* <Stack.Navigator initialRouteName="Login">
		  <Stack.Screen
		  name="Login"
		  component={LoginScreen}
		  options={{ title: 'Login Page' }}
		  />
		  <Stack.Screen name="Home" component={HomeScreen} />
		  <Stack.Screen name="SignUp" component={SignUpScreen} />
		</Stack.Navigator> */}
	  </NavigationContainer>
	  </AuthContext.Provider>
	);
  }

export default App;