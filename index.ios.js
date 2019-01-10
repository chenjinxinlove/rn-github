/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Image, Text, View, CustomBadgeView } from 'react-native'
import { TabNavigator, TabNavigatorItem } from 'react-native-tab-navigator'

export default class rngithub extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedTab: 'tb_popular',
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>dfsdfsdjjj</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFd',
	},
	page1: {
		flex: 1,
		backgroundColor: 'red',
	},
	page2: {
		flex: 1,
		backgroundColor: '#fdd',
	},
	image: {
		width: 20,
		height: 20,
	},
})

AppRegistry.registerComponent('rngithub', () => rngithub)
