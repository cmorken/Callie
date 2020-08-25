import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUpScreen = ({navigation}) => {
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
};

export default SignUpScreen;

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