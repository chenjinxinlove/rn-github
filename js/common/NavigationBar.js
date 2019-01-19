import React, { Component, PropTypes } from 'react'
import { StyleSheet, Image, Text, View, StatusBar, Platform } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

const NAV_BAR_HEIGHT_ADNROID = 50
const NAV_BAR_HEIGHT_IOS = 44
const STATUS_BAR_HEIGHT = 20
const StatusBarShape = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content'])
}

export default class NavigationBar extends Component {
  static propTypes = {
    style: View.propTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hide: PropTypes.bool,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar: PropTypes.shape()
  }
  static defaultProps = {
  }
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      hide: false
    }
  }
  render () {
    let status = <View style={[styles.statusBar, this.props.statusBar]}><StatusBar {...this.props.statusBar}/></View>
    let titleView = this.props.titleView ? this.props.titleView: <Text>{this.props.title}</Text>
    let content = <View style={styles.navBar}>
      {this.props.leftButton}
      <View style={styles.titleViewContainer}>
        {titleView}
      </View>
      {this.props.rightButton}
    </View>
    return (
      <View style={[StyleSheet.container, this.props.style]}>
        {content}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFd',
  },
  navBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ADNROID,
    flexDirection: 'row'
  },
  titleViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    top: 0,
    bottom: 0
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT: 0
  }
})