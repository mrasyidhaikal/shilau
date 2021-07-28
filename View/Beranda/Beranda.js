import * as React from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Style, { ijo, oren, putih } from './../Style/Style'
import Project from '../../components/Project'
import DATA from './dataDummy'
import HeaderComponent from './HeaderComponent'
import useGlobalStore from '../store/useGlobalStore'
import { auth } from '../../utils/firebase'
import { getUsulan } from '../../utils/get'

function renderProject({ item }) {
  return (
    <View style={Style.wrapper}>
      <Project data={item} />
    </View>
  )
}

class Beranda extends React.Component {
  constructor() {
    super()

    this.state = {
      refreshing: false,
      data: []
    }
  }

  componentDidMount() {
    const setUser = useGlobalStore.getState().setUser
    const user = auth.currentUser
    getUsulan(user.uid).then((val) => {
      this.setState({
        data: val
      });
    })
    setUser(user.displayName, user.email, user.uid)
  }

  render() {
    return (
      <View style={Style.container}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            ListHeaderComponent={HeaderComponent}
            renderItem={renderProject}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </SafeAreaView>
      </View>
    )
  }
}

export default Beranda
