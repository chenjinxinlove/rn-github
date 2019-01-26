import React, { Component, PropTypes } from 'react'
import { BackAndroid } from 'react-native'

export default class BackPressComponent extends Component {
  constructor(props) {
    this._hardwareBackPress = this.onHardwareBackPress.bind(this)
  }
  componentDidMount() {
    if (this.props.backPress) BackAndroid.addEventListener('hardwareBackPress', this._hardwareBackPress())
  }
  onHardwareBackPress(e) {
    return this.props.backPress(e)
  }
  componentWillUnmount(){
    if (this.props.backPress) BackAndroid.removeEventListener('hardwareBackPress', this._hardwareBackPress())
  }
}