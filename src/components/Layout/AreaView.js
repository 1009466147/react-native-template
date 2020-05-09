import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView
} from 'react-native';

export default class AreaView extends Component {
	render() {
    return (
      <SafeAreaView {...this.props} style={[styles.container,this.props.style]}>{this.props.children}</SafeAreaView>
    )
	}
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
    // alignItems: 'center',
    // flexDirection: 'row',
		// justifyContent: 'center',
	}
})
