import React, { useState, Component } from 'react'
import { View, Text, StatusBar } from 'react-native';
import NavItem from './NavItem';
import StudyComponent from '../components/Header/Study'
import { ios, statusBarHeight } from '../utils/Device';
const study = {
  header:({ previous, navigation }) => {
    return (
      <StudyComponent />
    )
  }
}

const options = {
  study,

}

export default ({ navigation, route }) => {
  const defaultOptions = {
    initialRouteName:'firstScreen',
    headerStyle: {
      borderBottomWidth: 0,
      elevation: 0,
      backgroundColor: '#ff2d55',
      paddingTop: ios ? 0 : statusBarHeight,
      height: 44 + (ios ? 0 : statusBarHeight),
    },
    headerTitleStyle: { textAlign: 'center', flex: 1, },
    headerTintColor: '#fff',
    headerBackTitle: null,
    //是否手势关闭屏幕
    // gestureEnabled: false,
    // //这个属性慎用
    // unmountOnBlur:true
  };

  let routeName = route.name;
  if (routeName === 'Tab') {
    //默认是study 学习首页
    routeName = 'study'
    if(route.state){
      const { state: {routeNames, index} } = route;
      routeName = routeNames[index];
    }
  }
  if(options[routeName]) return {...defaultOptions, ...options[routeName] || {}}

  return {
    ...defaultOptions,
    headerLeft: () => <NavItem onPress={() => navigation.goBack()} />,
    headerRight: () => <View />,
  };

};