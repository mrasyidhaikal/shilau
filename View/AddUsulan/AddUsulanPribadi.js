import React from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native'
import Styles from '../Style/Style'
import MainUsulanStyle from '../Style/MainUsulan.style'
import AddUsulan from '../Style/AddUsulan.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import * as DocumentPicker from 'expo-document-picker'
import firebase, { users } from '../../utils/firebase'
import useGlobalStore from '../store/useGlobalStore'
import { Buffer } from 'buffer'
import 'firebase/storage';
// const { StorageAccessFramework } = DocumentPicker;

export default class AddUsulanPribadi extends React.Component {
  state = {
    index: 0,
    display: 1,
    Tipe_Klustur: '', // Dropdown Picker
    selectFile: '',
    Nama_Pengusul: '',
    No_Handphone: '',
    Email: '',  
    Alamat:'',
    Judul_Proyek: '',
    Deskripsi: '',
    Luaran: '',
    File: null,
    NameFile: ''
  }
  setDataPribadiWithId = (/*Number*/uid, /*Object*/data) => {
    const setDataPribadi = users.doc(uid).collection('pribadi');
    const {File, ...other} = data;
  
    const Storage = firebase.storage().ref(`pdf/${this.state.NameFile}`);
  
      setDataPribadi.add({
        ...other
      }).then(res => {
        
      }).catch(er => {
        console.log(er);
      })
  
      Storage.put(File);
  }
  
  handlePress = () => {
    if (this.state.display >= 2) {
      const userState = useGlobalStore.getState().userState
      this.setDataPribadiWithId(userState.uid, this.state);
      return
    }
    this.setState({ display: this.state.display + 1 })
  }
  handleTitle = (display) => {
    if (display === 1) return 'A. Informasi Diri'
    if (display === 2) return 'B. Informasi Proyek'
  }
  checkIndex = () => {
    if (this.state.index === 0) return '#666872'
    return '#fff'
  }
  handlePickDocument = async () => {
    let document = await DocumentPicker.getDocumentAsync()
    // console.log(document.file);
    
    let buff = new Buffer.from(document.uri).toString('base64');

    if(document.uri.length !== 0)
      this.setState({
        File: buff,
        NameFile: document.name
      })
    
    return;
  }

  onSubmit = () => {
    // const {File, ...other} = this.state;
    
    // setDataPribadiWithId()
  }

  render() {
    const layer = 2
    const { navigation } = this.props
    const { display, selectOption } = this.state
    return (
      <SafeAreaView style={[Styles.container]}>
        <View style={Styles.NavBackContainer}>
          <TouchableOpacity
            style={MainUsulanStyle.BackButton}
            onPress={() => {
              display === 1
                ? navigation.goBack()
                : this.setState({ display: display - 1 })
            }}
          >
            <Icon name="arrow-back" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={[Styles.headerText, MainUsulanStyle.AdditionalheaderText]}>
          Usulan Pribadi
        </Text>
        {
          // Form A Info Diri
        }
        <ScrollView>
          <View style={[Styles.ContainerViewBiasa]}>
            <Text style={[Styles.textNormalWhite]}>
              {this.handleTitle(display)}
            </Text>
            <View
              style={[
                AddUsulan.FormTextInputView,
                { display: display === 1 ? 'flex' : 'none' },
              ]}
            >
              <TextInput
                placeholder="Nama Pengusul"
                placeholderTextColor="#666872"
                data-target="nama"
                onChangeText={text => this.setState({...this.setState, Nama_Pengusul: text})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="No Handphone"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({...this.setState, No_Handphone: text})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({...this.setState, Email: text})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({...this.setState, Alamat: text})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
            </View>
            <View
              style={[
                AddUsulan.FormTextInputView,
                { display: display === 2 ? 'flex' : 'none' },
              ]}
            >
              <TextInput
                placeholderTextColor="#666872"
                placeholder="Judul Proyek"
                onChangeText={text => this.setState({...this.setState, Judul_Proyek: text})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <View style={[Styles.input, AddUsulan.AdditionalInputStyle]}>
                <Picker
                  style={[
                    Styles.input,
                    { position: 'absolute', color: `#fff` },
                  ]}
                  selectedValue={selectOption}
                  onValueChange={(value, index) => {
                    this.setState({ Tipe_Klustur: value, index: index })
                  }}
                  dropdownIconColor="fff"
                  mode="dropdown"
                >
                  <Picker.Item label="Tipe Kluster" enabled={false} />
                  <Picker.Item
                    label="Web Application"
                    value="Web Application"
                  />
                  <Picker.Item
                    label="Mobile Application"
                    value="Mobile Application"
                  />
                  <Picker.Item label="Big Data" value="Big Data" />
                </Picker>
              </View>

              <TextInput
                placeholder="Jelaskan Secara Singkat Deskripsi Proyek yang dilkakukan"
                multiline
                numberOfLines={4}
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({...this.setState, Deskripsi: text})}
                maxLength={40}
                style={[
                  Styles.input,
                  AddUsulan.AdditionalInputStyle,
                  AddUsulan.AdditionalInputOfTextArea,
                ]}
              />
              <View>
                <Text style={Styles.textNormalWhite}>
                  Pernah komunikasi Dengan Pihak Polibatam ?
                </Text>
                {
                  //CheckBox Row // Checkbox Belum ada di React
                }
              </View>
              <TextInput
                editable={false}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Luaran"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({...this.setState, Luaran: text})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <View
                style={[
                  Styles.input,
                  AddUsulan.AdditionalInputStyle,
                  { marginBottom: 5 },
                ]}
              >
                <TouchableOpacity
                  onPress={this.handlePickDocument}
                >
                  <Text style={[Styles.textNormalWhite]}>Pilih File</Text>
                </TouchableOpacity>
              </View>

              <Text
                style={[Styles.textNormalWhite, { alignSelf: 'flex-start' }]}
              >
                NB: Maks 5 MB, FIleType: ZIP|RAR
              </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={[
            Styles.buttonBiru,
            MainUsulanStyle.AdditionalButton,
            AddUsulan.AdditionalButton,
          ]}
          onPress={this.handlePress}
        >
          <Text style={Styles.textNormalWhite}>
            {layer === display ? 'Save' : 'Next'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
