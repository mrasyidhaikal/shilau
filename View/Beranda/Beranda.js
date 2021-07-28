import * as React from 'react'
import { SafeAreaView, View, FlatList, RefreshControl } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Style, { ijo, oren, putih } from './../Style/Style'
import Project from '../../components/Project'
import DATA from './dataDummy'
import HeaderComponent from './HeaderComponent'
import useGlobalStore from '../store/useGlobalStore'
import { auth } from '../../utils/firebase'
import { getUsulan } from '../../utils/get'

class Beranda extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      dataUsulan: [],
    }
  }
  unsubsFocus = ''

  componentDidMount() {
    const setUser = useGlobalStore.getState().setUser
    const { navigation } = this.props
    const user = auth.currentUser
    setUser(user.displayName, user.email, user.uid)
    this.unsubsFocus = navigation.addListener('focus', () => {
      this.fetchGetUsulan()
    })
  }

  componentWillUnmount() {
    this.unsubsFocus()
  }

  fetchGetUsulan = () => {
    this.setState({
      refreshing: true,
    })
    const user = auth.currentUser
    getUsulan(user.uid).then((res) => {
      this.setState({
        dataUsulan: res,
        refreshing: false,
      })
    })
  }

  render() {
    return (
      <View style={Style.container}>
        <SafeAreaView>
          <FlatList
            data={this.state.dataUsulan}
            ListHeaderComponent={HeaderComponent}
            renderItem={renderProject}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.fetchGetUsulan}
              />
            }
          />
        </SafeAreaView>
      </View>
    )
  }
}
function renderProject({ item }) {
  return (
    <View style={Style.wrapper}>
      <Project data={item} />
    </View>
  )
}

export default Beranda
