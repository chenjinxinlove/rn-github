/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Image, Text, View, CustomBadgeView } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import PopularPage from './PopularPage'
import WebViewTest from './WebViewTest'
export default class rngithub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: '#007aff' }]} source={require('../../res/images/ic_polular.png')} />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.pages1}>
              <PopularPage />
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shebei'}
            title="Profile"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: '#007aff' }]} source={require('../../res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'shebei' })}>
            <View style={styles.pages2}>
              <WebViewTest/>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home1'}
            title="Home"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: '#007aff' }]} source={require('../../res/images/ic_polular.png')} />}
            onPress={() => this.setState({ selectedTab: 'home1' })}>
            <View style={styles.pages1}>
              <Text>这是首页</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'shebei1'}
            title="Profile"
            renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_trending.png')} />}
            renderSelectedIcon={() => <Image style={[styles.image, { tintColor: '#007aff' }]} source={require('../../res/images/ic_trending.png')} />}
            onPress={() => this.setState({ selectedTab: 'shebei1' })}>
            <View style={styles.pages2}>
              <Text>设备列表</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFd',
    paddingTop: 50
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
