import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  FlatList,
  ImageBackground,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Style from './../Style/Style'
import Project from '../../components/Project'
import DATA from './dataDummy'

function renderProject({ item }) {
  return (
    <View style={Style.wrapper}>
      <Project data={item} />
    </View>
  )
}

function headerComponent() {
  return (
    <>
      <View style={[styles.topBar, Style.wrapper]}>
        <View style={styles.profile}>
          <View style={styles.profile_img}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../../assets/person-female.jpg')}
            />
          </View>
          <View>
            <Text style={Style.textNormalWhite}>Selamat Datang</Text>
            <Text style={[Style.textBold]}>Clara Laudia</Text>
          </View>
        </View>
        <View style={styles.logo}>
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/poltek.png')}
          />
        </View>
      </View>

      <Text style={[Style.textBold, Style.wrapper, { marginBottom: 20 }]}>
        Status Proyek
      </Text>
    </>
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
    const { navigation } = this.props
    return (
      <View style={Style.container}>
        <SafeAreaView>
          <FlatList
            data={DATA}
            ListHeaderComponent={headerComponent}
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

const styles = StyleSheet.create({
  topBar: {
    paddingVertical: StatusBar.currentHeight + 5 || 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_img: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 10,
  },
  logo: {
    width: 70,
    height: 46,
  },
})
export default Beranda
