import React, { Component } from 'react';
import {
  View, 
  Text, 
  TouchableOpacity, 
	StyleSheet,
	Button,
  SafeAreaView,
	ScrollView,
	Image
} from 'react-native';
import { width, isIPhoneX } from '../../utils/Device';
import MyWorkView from './MyWork'
import RecentlyRead from './RecentlyRead'
import {connect} from 'react-redux'

@connect(({ user }) => ({ user }))
export default class Study extends Component {

	render() {
		const {navigation} = this.props;

    return (
			<SafeAreaView style={styles.container}>
				<ScrollView style={styles.scrollContent} >
					<MyWorkView />
					<RecentlyRead />
				</ScrollView>  
			</SafeAreaView>
    )
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	scrollContent: {
    paddingLeft: SCALE(30),
    paddingRight: SCALE(30),
    backgroundColor: '#fff'
	},
	tabBarText: {
		fontSize: 13, 
		textAlign: 'center',
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
	tabBarUnderline: {
		width: 24, 
		marginHorizontal: (width-24*5)/10, 
		backgroundColor: '#fff',
		borderRadius: 4,
		marginBottom: 2,
	}
})
