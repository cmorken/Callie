import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'react-native';

const LoginScreen = ({navigation}) => {
	return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Login</Text>
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
		backgroundColor: '#008B8B'
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