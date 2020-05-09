import React, { Component } from 'react';
import {
	StatusBar,
	View,
} from 'react-native';

import Nav from './Nav';

class App extends Component {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					translucent
					backgroundColor='transparent'
					barStyle='light-content'
				/>
				<Nav />
			</View>
		);
	}
}

export default App
