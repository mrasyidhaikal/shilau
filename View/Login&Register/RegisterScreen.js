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
import MainUsulanStyle from './../Style/MainUsulan.style'
import {auth} from '../../utils/firebase';

class RegisterScreen extends React.Component {
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

  handleRegister = () => {
    
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
                <Text style={Style.headerText}>Lengkapi Data Diri mu</Text>
                <Text style={Style.textNormalWhite}>
                  Isi Data Di Bawah untuk pengajuan Proyek
                </Text>
              </View>
            </View>

            <View
              style={{ marginHorizontal: 25, marginTop: 80, marginBottom: 50 }}
            >
              <View style={Style.inputContainer}>
                <Text style={Style.textNormalWhite}>Full Name</Text>
              </View>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.input}
                  placeholder={'Masukkan Nama Lengkap Anda'}
                  placeholderTextColor={grey}
                />
              </View>
              <View style={Style.inputContainer}>
                <Text style={Style.textNormalWhite}>E-Mail</Text>
              </View>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.input}
                  placeholder={'Masukkan Email Anda'}
                  placeholderTextColor={grey}
                />
              </View>
              <View style={Style.inputContainer}>
                <Text style={Style.textNormalWhite}>Password</Text>
              </View>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.input}
                  placeholder={'Masukkan Password'}
                  placeholderTextColor={grey}
                  secureTextEntry={this.state.showPass}
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
              <View style={Style.inputContainer}>
                <Text style={Style.textNormalWhite}>Retype Password</Text>
              </View>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.input}
                  placeholder={'Masukkan Password'}
                  placeholderTextColor={grey}
                  secureTextEntry={this.state.showPass}
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
            </View>
            <View style={Style.ContainerViewBiasa}>
              <View style={Style.inputContainer}>
                <TouchableOpacity style={Style.buttonBiru}>
                  <Text
                    style={{ fontSize: 16, color: '#fff', alignSelf: 'center' }}
                  >
                    Registrasi
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

export default RegisterScreen
