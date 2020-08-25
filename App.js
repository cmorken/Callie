/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, Button } from 'react-native';

function LoginScreen({navigation}) {
	return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor = "1e90ff"
					barStyle="light-content"
					/>
				<Text style={styles.welcome}>Login To My App</Text>
				<TextInput
					style={styles.input}
					placeholder="Username"
				/>
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry
				/>
				<View style={styles.btnContainer}>
					<TouchableOpacity
					style={styles.userBtn}
					onPress={() => navigation.navigate('Home')}
					>
						<Text style={styles.btnText}>Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.userBtn}
						onPress={() => navigation.navigate('SignUp')}
					>
						<Text style={styles.btnText}>Signup</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
}

function HomeScreen({navigation}) {
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Welcome to my app!</Text>
		<Button
        	title="Logout"
        	onPress={() => navigation.navigate('Login')}
      />
	  </View>
	);
}

function SignUpScreen({navigation}) {
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Sign up for my app!</Text>
		<TextInput
			style={styles.input}
			placeholder="Username"
		/>
		<TextInput
			style={styles.input}
			placeholder="Password"
			secureTextEntry
		/>
		<TextInput
			style={styles.input}
			placeholder="Confirm Password"
			secureTextEntry
		/>
		<TextInput
			style={styles.input}
			placeholder="Email"
		/>
		<TextInput
			style={styles.input}
			placeholder="Phone Number"
		/>
		<View style={styles.btnContainer}>
				<TouchableOpacity
					style={styles.signup}
					onPress={() => alert('SignUp Succesful!')}
					>
					<Text>Signup</Text>
				</TouchableOpacity>
		</View>
		<Button
        	title="Return to Login"
        	onPress={() => navigation.navigate('Login')}
      />
	  </View>
	);
}

const Stack = createStackNavigator();

function App() {
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