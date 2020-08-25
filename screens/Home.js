import React from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({navigation}) => {
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Welcome to my app!</Text>
		<Button
        	title="Logout"
        	onPress={() => navigation.navigate('Login')}
      />
	  </View>
	);
};

export default HomeScreen;
