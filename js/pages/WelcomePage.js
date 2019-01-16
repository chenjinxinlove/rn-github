import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NavigatorBar from '../common/NavigationBar'
import HomePage from './HomePage'

export default class WelcomePage extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigator.resetTo({
        component: HomePage
      })
    }, 2000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }
  render() {
    return <View>
      <NavigatorBar
        title={'欢迎'}
      />
      <Text>欢迎</Text>
    </View>
  }
}