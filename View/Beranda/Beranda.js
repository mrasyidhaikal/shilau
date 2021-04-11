import * as React from 'react'
import { SafeAreaView, View, FlatList } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Style, { ijo, oren, putih } from './../Style/Style'
import Project from '../../components/Project'
import DATA from './dataDummy'
import HeaderComponent from './HeaderComponent'

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
    }
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
