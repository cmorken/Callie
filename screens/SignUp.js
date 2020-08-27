import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SignUpScreen = ({navigation}) => {
	return (
	<View style={styles.container}>	
		<Text style={styles.welcome}>Signup</Text>
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
					<Text style={styles.btnText}>Signup</Text>
				</TouchableOpacity>
		</View>
		<Button 
			color="#fff"
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
		backgroundColor: '#008B8B'
	},
	signup: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "#fff",
		padding: 15,
		width: "45%",
		color: "#008B8B"
	},
	welcome: {
		textAlign: 'center',
		marginBottom: 5,
		fontSize: 50,
		color: "#fff",
		fontFamily: "OpenSansCondensed-Light"
	},
	input: {
		width: "90%",
		backgroundColor: "#fff",
		padding: 15,
		marginBottom: 10,
		color: "#008B8B"
	},
	btnContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "90%"
	},
	userBtn: {
		backgroundColor: "#fff",
		padding: 15,
		width: "45%"
	},
	btnText: {
		fontSize: 18,
		textAlign: "center",
		color: "#008B8B"
	}
});