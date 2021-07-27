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
  Alert,
} from 'react-native'
import BerandaStyle from './../Style/BerandaStyle'
import AsyncStorage from '@react-native-async-storage/async-storage'
import moment from 'moment'
import Icon from 'react-native-vector-icons/Ionicons'
import Style, { windowHeight, WIDTH, grey } from './../Style/Style'
import MainUsulanStyle from './../Style/MainUsulan.style'
import { auth } from '../../utils/firebase';
import useAuthStore from '../store/useAuthStore' 

class RegisterScreen extends React.Component {
  constructor() {
    super()

    this.state = {
      refreshing: false,
      showPass: true,
      press: false,
      username: "",
      email: '',
      password:"",
      errorInfo: '',
      showError: false,
      recheck: "",
    }
  }

  showPass = async () => {
    if (this.state.press == false) {
      this.setState({ showPass: false, press: true })
    } else {
      this.setState({ showPass: true, press: false })
    }
  }

  checkPass = (pas) => {
    password = pas.toString();
    if (password.length < 6) {
      this.setState({
         errorInfo: 'Minimal Panjang Password 6',
         showError: true,
      })
      return;
    }
    if (!(/(?=[A-Z])/g.test(password))) {
      this.setState({
        errorInfo: 'Harus Terdiri Dari Satu Huruf Kapital',
        showError: true,
      });
      return;
    }
    if (!(/(?=[0-9])/g.test(password))) {
      this.setState({
        errorInfo: 'Harus Terdiri Satu Angka',
        showError: true
      })      
      return
    }

    this.setState({
      errorInfo: "",
      showError: false,
    })
  }


  handleRegister = async (event) => {
    const { username, email, password, errorInfo, showError, recheck } = this.state;
    if(username.length == 0){
      this.setState({
        errorInfo: 'Full Name Tidak Boleh Kosong',
        showError: true
      });
      return
    }

    if(email.length == 0){
      this.setState({
        errorInfo: 'Email Tidak Boleh Kosong',
        showError: true
      });
      return
    }

    if (!(/^[\w\.\-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))) {
      Alert.alert('Format Email', 'Format Email Salah');
      return;
    }
   
    if(recheck !== password){
      Alert.alert('Password Retype', 'Password Tidak Sama dengan yang di retype');
      return;
    }

    if(errorInfo.length != 0 && showError ){
      return;
    }

    this.setState({
      errorInfo: "",
      showError: false,
    })

    auth.createUserWithEmailAndPassword(email, password).then((ss)=> {
      auth.currentUser.updateProfile({
        displayName: username
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      
      const setIsLoggedIn = useAuthStore.getState().setIsLoggedIn;
      setIsLoggedIn(true)

    }, (errorSignUp) => {
      Alert.alert('Opps!, Terjadi Kesalahan', errorSignUp)
    })
    
  }
  
  handlePass = (Password) => {
    // this.checkPass(Password);
    this.setState({
      ...this.setState,
      password: Password
    }, () => {
      this.checkPass(this.state.password)
    })
    return;
  }

  handleEmail = (email) => {
    this.setState({
      ...this.setState,
      email: email,
    });
    return;
  }
  handleUsername = (name) => {
    this.setState({
      ...this.setState,
      username: name
    })
    return
  }

  handleCheckSamePass = (check) => {
    this.setState({
      ...this.setState,
      recheck: check
    });
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
                {
                  this.state.showError && <Text style={{color: 'yellow', textAlign: 'center', fontSize: 14}}>{`${this.state.errorInfo}`}</Text>
                }
              <View style={Style.inputContainer}>
                
                <View style={Style.inputContainer}>
                  <Text style={Style.textNormalWhite}>Full Name</Text>
                </View>
                <View style={Style.inputContainer}>
                  <TextInput
                    style={Style.input}
                    placeholder={'Masukkan Full Name Anda'}
                    placeholderTextColor={grey}
                    onChangeText={user => this.handleUsername(user)}
                  />
                </View>
              </View>
              <View style={Style.inputContainer}>
                <Text style={Style.textNormalWhite}>E-Mail</Text>
              </View>
              <View style={Style.inputContainer}>
                <TextInput
                  style={Style.input}
                  placeholder={'Masukkan Email Anda'}
                  placeholderTextColor={grey}
                  onChangeText={email => this.handleEmail(email)}
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
                  maxLength={16}
                  onChangeText={pass => this.handlePass(pass)}
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
                  onChangeText={check => this.handleCheckSamePass(check)}
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
                <TouchableOpacity style={Style.buttonBiru} onPress={this.handleRegister}>
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
