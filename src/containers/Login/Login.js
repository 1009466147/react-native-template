import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ToastAndroid,
  BackHandler,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Picker
} from 'react-native';
import AreaView from '../../components/Layout/AreaView'
import { connect } from 'react-redux'
import { FETCH_LOGIN } from '../../actions/user'
let lastBackPressed = false;
import { storage } from '../../utils/Storage'

@connect(({ user }) => ({ user }))
export default class Login extends Component {
  state = {
    showPwd: false,
    school: '000001',
    phone: 'geeboo',
    password: '123456'
  }

  stateChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  goHome = () => {
    this.props.navigation.replace('Tab')
  }
  onBackPress = () => {

    if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
      return false;
    }
    lastBackPressed = Date.now()
    ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
    return true;
  }

  loginHandle = () => {
    const { phone, school, password } = this.state;
    const { dispatch } = this.props;
    if (phone.trim() === '' || password.trim() === '') {
      Alert.alert('账号或密码不能为空');
      return;
    }
    if (school.trim() === '') {
      Alert.alert('请选择学校');
      return;
    }
    const params = { account: phone, schoolCode: school, password: password }
    dispatch(FETCH_LOGIN(params))
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  render() {
    const { navigation } = this.props;

    return (
      <AreaView style={styles.AreaView}>
        <ScrollView
          contentContainerStyle={{ flex: 1 }} // 非常重要，让ScrollView的子元素占满整个区域
          keyboardDismissMode="on-drag" // 拖动界面输入法退出
          keyboardShouldPersistTaps={'never'} // 点击输入法以外的区域，输入法退出 不加这两句也可以实现点击空白处收回键盘
          scrollEnabled={false} // 当值为false的时候，内容不能滚动，默认值为true
        >
          <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <Image source={require('../../assets/images/login/logo_student.png')} style={styles.logo} />

            <View style={[styles.inputView, { marginTop: SCALE(98) }]}>

              <Image source={require('../../assets/images/login/ic_login_school.png')} style={styles.icon} />

              <Picker
                style={styles.input}
                selectedValue={this.state.school}
                prompt="请选择学校"
                onValueChange={(itemValue, itemIndex) => this.stateChange('school', itemValue)}
              >
                <Picker.Item label="学校1" value="000000" />
                <Picker.Item label="学校2" value="000001" />
              </Picker>
              {/* <Image source={require('../../assets/images/login/list_more.png')} style={styles.icon} /> */}
            </View>
            <View style={styles.inputView}>
              <Image source={require('../../assets/images/login/login_ic_phone.png')} style={styles.icon} />
              <TextInput
                placeholder='输入手机号/学号'
                keyboardType="phone-pad"
                style={styles.input}
                onChangeText={(text) => this.stateChange('phone', text)}
                value={this.state.phone}
              />

            </View>
            <View style={styles.inputView}>
              <Image source={require('../../assets/images/login/login_ic_password.png')} style={styles.icon} />
              <TextInput
                placeholder='输入密码'
                style={styles.input}
                secureTextEntry={!this.state.showPwd}
                onChangeText={(text) => this.stateChange('password', text)}
                value={this.state.password}
              />
              <TouchableOpacity onPress={() => this.stateChange('showPwd', !this.state.showPwd)}>
                <Image source={
                  this.state.showPwd ?
                    require('../../assets/images/login/login_ic_visual.png') :
                    require('../../assets/images/login/login_ic_invisible.png')
                } style={styles.icon} />
              </TouchableOpacity>
            </View>
            <View style={styles.forgetPwd}>
              <TouchableOpacity>
                <Text style={{ color: '#999999', fontSize: FONT(28) }}>忘记密码</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginBtn} activeOpacity={.7} onPress={this.loginHandle}>
              <Text style={{ color: '#fff', fontSize: FONT(32) }}>登 录</Text>

            </TouchableOpacity>
            <View style={{ height: SCALE(272) }}></View>
          </KeyboardAvoidingView>
        </ScrollView>
      </AreaView>
    )

  }


}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    marginTop: SCALE(168),
    width: SCALE(600),
    height: SCALE(80),
    backgroundColor: 'linear-gradient(-90deg,rgba(60,196,60,1) 0%,rgba(113,212,113,1) 100%);',
    borderRadius: SCALE(40),
    alignItems: 'center',
    justifyContent: 'center'
  },
  AreaView: {
    backgroundColor: '#fff',
    paddingTop: BARHEIGHT
  },
  icon: {
    width: SCALE(40),
    height: SCALE(40)
  },
  logo: {
    marginTop: SCALE(151),
    width: SCALE(179),
    height: SCALE(179),
  },
  forgetPwd: {
    width: SCALE(600),
    marginTop: SCALE(31),
    flexDirection: 'row-reverse'
  },
  inputView: {
    width: SCALE(600),
    height: SCALE(80),
    alignItems: 'center',
    paddingLeft: SCALE(20),
    paddingRight: SCALE(20),
    borderBottomWidth: 1,
    borderBottomColor: '#6ED582',
    flexDirection: 'row',
    marginTop: SCALE(40)
  },
  input: {
    fontSize: FONT(32),
    color: 'rgb(163,166,169)',
    flex: 1,
    height: SCALE(80),
    // paddingLeft: SCALE(6),
    // paddingRight: SCALE(6)
  }
})
