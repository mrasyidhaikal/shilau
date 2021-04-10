import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  RefreshControl,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Style from './../Style/Style'

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
          <ScrollView>
            <TouchableOpacity
              style={[Style.buttonGhost, { margin: 25, marginTop: 40 }]}
              onPress={() =>
                navigation.navigate('AddUsulanStack', {
                  screen: 'MainUsulan',
                })
              }
            >
              <Text style={Style.textBold}>Test</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default Beranda
