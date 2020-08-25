import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'react-native';

const LoginScreen = ({navigation}) => {
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
};

export default LoginScreen;

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