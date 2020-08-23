import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import EmojiDict from './src/components/EmojiDict';
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Hello World!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		fontSize: 50,
		fontFamily: "OpenSansCondensed-Light"
	}
});