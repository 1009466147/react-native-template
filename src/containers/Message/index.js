import React, { Component } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
	StyleSheet,
	Button,
	SafeAreaView
} from 'react-native';
import { width, isIPhoneX } from '../../utils/Device';


import {connect} from 'react-redux'
@connect(({ user }) => ({ user }))

export default class Message extends Component {

	render() {
		const {navigation} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        
				<TouchableOpacity 
					style={styles.button}
					activeOpacity={0.7}
					onPress={() => navigation.replace('login')}
					>
					<Text>登录</Text>
				</TouchableOpacity>
      </SafeAreaView>  
    )

	}


}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	button: {
		width,
		height: 50,
		position: 'absolute',
		bottom: 0,
		alignSelf: 'flex-end',
		marginBottom: isIPhoneX ? 34 : 0,
		backgroundColor:'#fff',
		justifyContent: 'center', 
		alignItems: 'center', 
	},

})
