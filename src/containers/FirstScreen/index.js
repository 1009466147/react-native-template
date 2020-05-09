import React, { Component } from 'react';
import {
  View, 
  Text, 
  Image,
  StyleSheet,

} from 'react-native';

import {getToken, setToken, removeAll} from '../../utils/Authority'
setToken('模拟已经获取到token')
// removeAll()
export default class Login extends Component {

  async componentWillMount(){
    const { navigation } = this.props;
    const token = await getToken()
    if(token){
      // 这里需要存储token到redux 以及请求首屏数据完成后 跳转到首屏
      setTimeout(()=>{
        navigation.replace('Tab');
      },1000)
    }else{
      setTimeout(()=>{
        navigation.replace('login');
      },1000)
    }
  }
  
	render() {
		const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text>首屏加载</Text>
      </View>
    )
	}
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

})
