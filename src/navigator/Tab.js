import React, { Component } from 'react';
import {
	Text,
	Image,
	View,
	StyleSheet
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from './TabBar';
import tabOpts from './MainTab'
// import Friend from '../Friend';
// import Me from '../Me';

const tabOptions = {
	tabBar: (props) => <TabBar {...props} />,// 自定义tab样式
	lazy: true,
	tabBarOptions: {
		activeTintColor: '#2FB768',
		inactiveTintColor: '#A3A6A9',
	},
	swipeEnabled:true,
	initialRouteName: 'study',
	tabBarPosition: 'bottom',
	swipeVelocityImpact: 0.1
}

const Tab = createMaterialTopTabNavigator();
export default () => (
	
	<Tab.Navigator {...tabOptions}>
		{
			Object.keys(tabOpts).map(name => (
				<Tab.Screen name={name} key={name} {...tabOpts[name]} />
			))
		}
	</Tab.Navigator>
);

const styles = StyleSheet.create({
	item: {
		width: 27,
		height: 27,
	},
	centerItem: {
		width: 38,
		height: 38,
	},
})