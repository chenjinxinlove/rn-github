/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Image, Text, View, CustomBadgeView } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

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
				<TabNavigator>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'tb_popular'}
						seselectedTitleStyle={{color: 'red'}}
						title="Home"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_polular.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_polular.png')}
							/>
						)}
						badgeText="1"
						onPress={() => this.setState({ selectedTab: 'home' })}
					>
						<View style={styles.page1} />
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'tb_trending'}
						seselectedTitleStyle = {
							{
								color: '#ffd'
							}
						}
						title="Profile"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_trending.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_trending.png')}
							/>
						)}
						renderBadge={() => <CustomBadgeView />}
						onPress={() => this.setState({ selectedTab: 'tb_favorite' })}
					>
						<View style={styles.page2} />
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'tb_my'}
						seselectedTitleStyle = {{color: '#ffd'}}
						title="Profile"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_trending.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_trending.png')}
							/>
						)}
						renderBadge={() => <CustomBadgeView />}
						onPress={() => this.setState({ selectedTab: 'profile' })}
					>
						<View style={styles.page2} />
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'profile'}
						seselectedTitleStyle = {{color: '#ffd'}}
						title="Profile"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_trending.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_trending.png')}
							/>
						)}
						renderBadge={() => <CustomBadgeView />}
						onPress={() => this.setState({ selectedTab: 'profile' })}
					>
						<View style={styles.page2} />
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'profile'}
						seselectedTitleStyle = {{color: '#ffd'}}
						title="Profile"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_trending.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_trending.png')}
							/>
						)}
						renderBadge={() => <CustomBadgeView />}
						onPress={() => this.setState({ selectedTab: 'profile' })}
					>
						<View style={styles.page2} />
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'profile'}
						seselectedTitleStyle={{ color: '#ffd' }}
						title="Profile"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_trending.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_trending.png')}
							/>
						)}
						renderBadge={() => <CustomBadgeView />}
						onPress={() => this.setState({ selectedTab: 'profile' })}
					>
						<View style={styles.page2} />
					</TabNavigator.Item>
					<TabNavigator.Item
						selected={this.state.selectedTab === 'profile'}
						seselectedTitleStyle={{ color: '#ffd' }}
						title="Profile"
						renderIcon={() => (
							<Image style={styles.image} source={require('./res/images/ic_trending.png')} />
						)}
						renderSelectedIcon={() => (
							<Image
								style={[styles.image, { tintColor: 'red' }]}
								source={require('./res/images/ic_trending.png')}
							/>
						)}
						renderBadge={() => <CustomBadgeView />}
						onPress={() => this.setState({ selectedTab: 'profile' })}
					>
						<View style={styles.page2} />
					</TabNavigator.Item>
				</TabNavigator>
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
