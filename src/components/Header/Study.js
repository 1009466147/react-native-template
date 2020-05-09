import React,{Component} from 'react';
import { View, StyleSheet, Image, Text, StatusBar } from 'react-native'
import { ios, statusBarHeight } from '../../utils/Device';
import { connect } from 'react-redux'

 function Study( {user} ){
  return (
    <View style={styles.study}>
      <StatusBar />
      <View style={styles.userContent}>
        <Image source={require('../../assets/images/common/default.png')} style={styles.headImg}/> 
        <Text style={styles.userName}>小明同学</Text>
      </View>  
      <View style={styles.message}><Text >111</Text></View>  
    </View>
  )
} 
export default connect(({ user }) => ({
  user,
}))(Study);

const styles = StyleSheet.create({
  flexRow:{
    flexDirection: 'row',
    
  },  
  study:{
      backgroundColor: 'linear-gradient(90deg,rgba(95,183,154,1) 0%,rgba(48,159,122,1) 100%)',
      paddingTop: statusBarHeight,
      height: SCALE(160) + statusBarHeight,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: SCALE(30),
      paddingRight: SCALE(30)
  },
  userContent:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headImg:{
    width: SCALE(80),
    height: SCALE(80),
  },
  userName:{
    fontSize: FONT(32),
    marginLeft: SCALE(20),
    color:'#fff'
  },  
  message:{
    alignItems: 'center',
    justifyContent: 'center'
  }
})