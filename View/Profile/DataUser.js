import * as React from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Text,
  ImageBackground,
  Image,
  Touchable,
} from 'react-native'
import BerandaStyle from './../Style/BerandaStyle'
import MainUsulanStyle from './../Style/MainUsulan.style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'

import Style, { windowHeight, WIDTH, grey, biruMuda } from './../Style/Style'

class DataUser extends React.Component {
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
            <View style={Style.NavBackContainer}>
              <TouchableOpacity
                style={MainUsulanStyle.BackButton}
                onPress={() => navigation.goBack()}
              >
                <Icon name="arrow-back" size={32} color="#fff" />
              </TouchableOpacity>
              <View style={Style.inputContainer}>
                <Text style={Style.headerText}>Pengaturan Profile</Text>
              </View>
            </View>

            <View
              style={[
                Style.ContainerViewBiasa,
                { alignSelf: 'center', marginTop: 30 },
              ]}
            >
              <View style={{ width: 100, height: 100, alignSelf: 'center' }}>
                <Image
                  style={{ width: '100%', height: '100%', borderRadius: 50 }}
                  source={require('../../assets/person-female.jpg')}
                />
              </View>
              <Text style={Style.textBold}>Jenny Wilson</Text>
            </View>

            <View style={Style.ContainerViewBiasa}>
              <Text style={Style.textBold}>Personal</Text>
              <View style={Style.inputContainer}>
                <View style={[Style.input, { height: 70 }]}>
                  <View style={{ paddingTop: 10 }}>
                    <Text style={Style.textNormalGrey}>Nama</Text>
                    <Text style={Style.textNormalWhite}>Jenny Wilson</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Style.ContainerViewBiasa}>
              <Text style={Style.textBold}>Keamanan</Text>
              <View style={Style.inputContainer}>
                <View style={[Style.input]}>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Icon
                      name="ios-phone-portrait-outline"
                      size={26}
                      color={biruMuda}
                    ></Icon>
                    <Text style={[Style.textNormalWhite, { marginLeft: 10 }]}>
                      Verivikasi Email
                    </Text>
                  </View>
                </View>
              </View>
              <View style={Style.inputContainer}>
                <View style={[Style.input]}>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Icon
                      name="ios-lock-closed-outline"
                      size={26}
                      color={biruMuda}
                    ></Icon>
                    <Text style={[Style.textNormalWhite, { marginLeft: 10 }]}>
                      Ganti Password
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={Style.ContainerViewBiasa}>
              <TouchableOpacity style={[Style.buttonOren]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}
                >
                  <Text></Text>
                  <Text style={Style.textNormalWhite}>Keluar</Text>
                  <Icon
                    name="arrow-forward-circle-outline"
                    size={26}
                    color={'#fff'}
                  ></Icon>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default DataUser