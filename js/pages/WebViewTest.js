import React, { Component } from 'react'
import { Text, View, WebView } from 'react-native'

export default class WelcomePage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <View>
      <WebView source={{url: 'http://www.baidu.com'}}></WebView>
    </View>
  }
}