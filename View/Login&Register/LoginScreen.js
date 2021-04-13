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
} from 'react-native'
import BerandaStyle from './../Style/BerandaStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'

import Style, { windowHeight, WIDTH, grey } from './../Style/Style'

class LoginScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      refreshing: false,
      showPass: true,
      press: false,
    }
  }

  showPass = async () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={Style.container}>
        <SafeAreaView>
          <ScrollView>
            <View style={{ marginTop: windowHeight / 3, marginHorizontal: 25 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <Text style={Style.headerText}>Shilau</Text>
                  <Text style={Style.headerText}>Polibatam</Text>
                </View>

                <View style={BerandaStyle.logo}>
                  <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={require('../../assets/poltek.png')}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginHorizontal: 25, marginTop: windowHeight / 7 }}>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.inputLogin}
                  placeholder={'Masukkan Email'}
                  placeholderTextColor={grey}
                />
                <Icon
                  name={'ios-mail-outline'}
                  size={25}
                  color={'#2EAEBF'}
                  style={Style.inputIcon}
                />
              </View>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.inputLogin}
                  placeholder={'Masukkan Password'}
                  placeholderTextColor={grey}
                  secureTextEntry={this.state.showPass}
                />
                <Icon
                  name={'ios-lock-closed-outline'}
                  size={25}
                  color={'#2EAEBF'}
                  style={Style.inputIcon}
                />
                <TouchableOpacity
                  style={Style.btnEye}
                  onPress={this.showPass.bind(this)}
                >
                  <Icon
                    name={
                      this.state.press == false
                        ? 'ios-eye-outline'
                        : 'ios-eye-off-outline'
                    }
                    size={25}
                    color={'#666872'}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  marginTop: 15,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}
              >
                <TouchableOpacity>
                  <Text style={Style.textNormalWhite}>Lupa Password?</Text>
                </TouchableOpacity>
              </View>
              <View style={Style.inputContainer}>
                <TouchableOpacity style={Style.buttonBiru}>
                  <Text
                    style={{ fontSize: 16, color: '#fff', alignSelf: 'center' }}
                  >
                    Masuk
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                }}
              >
                <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
                <View>
                  <Text style={Style.textNormalWhite}> atau </Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#fff' }} />
              </View>

              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  style={Style.buttonGhost}
                  onPress={() => navigation.navigate('RegisterScreen')}
                >
                  <Text
                    style={{ fontSize: 16, color: '#fff', alignSelf: 'center' }}
                  >
                    Daftar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  }
}

export default LoginScreen