import React, { Component } from 'react'
import { Text, View, TextInput, ListView } from 'react-native'


export default class RepositioryCell extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <View style={{margin: 10}}>
        <Text>{this.props.data.full_name}</Text>
        <Text>{this.props.data.description}</Text>
        <Text>{this.props.data.owner.avatar}</Text>
        <Text>{this.props.data.full_name}</Text>
      </View>
    ) 
  }
}