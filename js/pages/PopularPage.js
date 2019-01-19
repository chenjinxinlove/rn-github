import React, { Component } from 'react'
import { Text, View, TextInput, ListView, StyleSheet } from 'react-native'
import NavigatorBar from '../common/NavigationBar'
import DataRepository from '../expand/dao/DataRepository'
import RepositioryCell from '../common/RepositioryCell'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars'

export default class PopularPage extends Component {
  render() {
    return <View>
      <NavigatorBar
        title={'最热'}
        style={{backgroundColor: '#6495Ed'}}
      />
      <ScrollableTabView renderTabBar={() => <ScrollableTabBar />}>
        <PopularTab tabLabel="React" />
        <PopularTab tabLabel="Flow" />
        <PopularTab tabLabel="Jest" />
      </ScrollableTabView>
    </View>
  }
}

class PopularTab extends Component {
  constructor(props) {
    super(props)
    this.dataRepository = new DataRepository()
    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      data: '',
      dataSource: ds
    }
  }
  componentDidMount () {
    this.onLoad()
  }
  onLoad() {
    const url = this.getUrl(this.props.tabLabel)
    console.log(url, 'url')
    this.dataRepository.fetchNetRepository(url)
      .then(result => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(result.items)
        })
      })
      .catch(err => {
        this.setState({
          data: JSON.stringify(err)
        })
      })
  }
  getUrl(key) {
    return URL + key + QUERY_STR
  }
  renderRow(data) {
    return <RepositioryCell data={data}/>
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(data) => this.renderRow(data)}
        />
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