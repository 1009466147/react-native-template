import React, { Component } from 'react';
import Study from '../containers/Study'
import Message from '../containers/Message'
import AddressList from '../containers/AddressList'
import Me from '../containers/Me'
import Library from '../containers/Library'
import { 
  StyleSheet, 
  Image
} from 'react-native';
const tabOpts = {
  message:{
    component:Message,
    options:{
      tabBarLabel: '消息',
      tabBarIcon: ({focused}) => (  
        <Image 
            source={focused?require('../assets/images/common/tabbar_me_click.png'):require('../assets/images/common/tabbar_me.png')}  
            style={styles.item}  
            />  
      )
    }
  },
  addressBook:{
    component:AddressList,
    options:{
      tabBarLabel: '通讯录',
      tabBarIcon: ({focused}) => (  
        <Image 
            source={focused?require('../assets/images/common/tabbar_me_click.png'):require('../assets/images/common/tabbar_me.png')}  
            style={styles.item}  
            />  
      )
    }
  },
  study:{
    component:Study,
    options:{
      tabBarLabel: '学习',
      tabBarIcon: ({focused}) => (  
        <Image 
            source={focused?require('../assets/images/common/tabbar_me_click.png'):require('../assets/images/common/tabbar_me.png')}  
            style={styles.centerItem}  
            />  
      )
    }
  },
  // placeholder:{
  //   component:Component,
  //   options:{
  //     tabBarLabel: ''
  //   }
  // },
  library:{
    component:Library,
    options:{
      tabBarLabel: '图书馆',
      tabBarIcon: ({focused}) => (  
        <Image 
            source={focused?require('../assets/images/common/tabbar_me_click.png'):require('../assets/images/common/tabbar_me.png')}  
            style={styles.item}  
            />  
      )
    }
  },
  user:{
    component:Me,
    options:{
      tabBarLabel: '我的',
      tabBarIcon: ({focused}) => (  
        <Image 
            source={focused?require('../assets/images/common/tabbar_me_click.png'):require('../assets/images/common/tabbar_me.png')}  
            style={styles.item}  
            />  
      )
    }
  }
}

const styles = StyleSheet.create({
  item: {
      width: 22,
      height: 22,
  },
  centerItem: {
      width: 38,
      height: 38,
  },
})

module.exports = tabOpts