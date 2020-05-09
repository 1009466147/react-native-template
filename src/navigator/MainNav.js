import React, { Component } from 'react';
import Login from '../containers/Login/Login'
import FirstScreen from '../containers/FirstScreen'
import { StatusBar } from 'react-native'

const MainNav = {
  login:{
    component:Login,
    options:{
      title: '登录',
      header:()=> <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    }
  },
  firstScreen:{
    component:FirstScreen,
    options:{
      header: () => <StatusBar hidden /> 
    }
  },
}


module.exports = MainNav