import React from 'react';
import { Button, Text, View, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
		<View style={styles.container}>	
		<Text style={styles.welcome}>Welcome to my app!</Text>
		<Button
			color="#008B8B"
        	title="Logout"
        	onPress={() => navigation.navigate('Login')}
      />
	  </View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
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
		color: "#008B8B",
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
