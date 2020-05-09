import './utils/Device'
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import models from './model';
import App from './navigator/App';
import { create } from 'dva-core';
import {
  Provider as AntdProvider
} from '@ant-design/react-native';
const app = create(); // 创建dva实例，可传递配置参数。https://dvajs.com/api/#app-dva-opts
 
models.forEach((o) => { // 装载models对象
  app.model(o);
});
 
app.start(); // 实例初始化
 
const store = app._store; // 获取redux的store对象供react-redux使用

export default class Root extends Component {
	render() {
		return (
			<Provider store={store}>
				<AntdProvider>
					<App />
				</AntdProvider>
	   	</Provider>
		);
	}
}

AppRegistry.registerComponent('AwesomeObject', () => Root);