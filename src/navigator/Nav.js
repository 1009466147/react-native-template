import React, { Component, useState, } from 'react';
import {
  BackHandler,
  ToastAndroid
} from 'react-native';
import Tab from './Tab';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import NavScreenOpts from './NavScreenOpts'
import MainNav from './MainNav'
import { navigationRef } from './RootNavigation';

const Stack = createStackNavigator();
// const Stack1 = createStackNavigator();

function ScreenWithCustomBackBehavior(props) {
  const [lastBackPressed, setLastBackPressed] = useState(0)
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
          return false;
        }
        setLastBackPressed(Date.now())
        ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
        return true;
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [lastBackPressed, setLastBackPressed])
  );
  return (
    <Tab {...props}></Tab>
  )
}
// NavigationContainer全局触发事件 onStateChange={()=>{}}
export default () => (
  <NavigationContainer ref={navigationRef} >
    {/* <Stack1.Navigator headerMode ="none" mode="modal">
      <Stack1.Screen name="Tab1" component={ScreenWithCustomBackBehavior} />
      
    </Stack1.Navigator> */}
    <Stack.Navigator mode="card" headerMode="screen" initialRouteName="firstScreen" screenOptions={NavScreenOpts} >
      <Stack.Screen name="Tab" component={ScreenWithCustomBackBehavior} />
      {
        Object.keys(MainNav).map(name => (
          <Stack.Screen name={name} {...MainNav[name]} key={name} />
        ))
      }
    </Stack.Navigator>
  </NavigationContainer>
)