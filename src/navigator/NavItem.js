import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, View, ViewPropTypes } from 'react-native';

import PropTypes from 'prop-types';

export default class NavItem extends Component {
	render() {
		const { style, source, onPress } = this.props;
		return (
			<TouchableOpacity
				style={style}
				onPress={onPress}
			>
				<Image
					resizeMode='contain'
					source={source}
					style={styles.image}
				/>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		width: 44,
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: 20,
		height: 20,
	}
})

NavItem.propTypes = {
	style: ViewPropTypes.style,
	source: PropTypes.object,
	onPress: PropTypes.func,
}

NavItem.defaultProps = {
	style: styles.item,
	source: { uri: 'nav_back' },
	onPress: null,
}

