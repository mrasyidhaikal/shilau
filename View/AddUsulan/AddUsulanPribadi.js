import React from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native'
import Styles from '../Style/Style'
import MainUsulanStyle from '../Style/MainUsulan.style'
import AddUsulan from '../Style/AddUsulan.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { Picker } from '@react-native-picker/picker'
import * as DocumentPicker from 'expo-document-picker'
import { setDataWithId } from '../../utils/set'
import useGlobalStore from '../store/useGlobalStore'
import { Buffer } from 'buffer'

import { checkEmailFormat, checkLengthDesk, checkLengthNoPhone, checkTipeKlustur } from '../../utils/utility'
// const { StorageAccessFramework } = DocumentPicker;

export default class AddUsulanPribadi extends React.Component {
  state = {
    index: 0,
    display: 1,
    data:{
      Tipe_Klustur: '',
      Nama_Pengusul: '',
      No_Handphone: '',
      Email:'',
      Alamat:'',
      Judul_Proyek:'',
      Deskripsi:'',
      Luaran:'',
      File:null,
      NameFile:''
    },
    showError: false,
    errorInfo: '',
  }
  
  
  handlePress = async () => {
    if (this.state.display >= 2) {
      const userState = useGlobalStore.getState().userState
      try {
        checkEmailFormat(this.state.data.Email);
        checkLengthNoPhone(this.state.data.No_Handphone);
        checkLengthDesk(this.state.data.Deskripsi);
        checkTipeKlustur(this.state.data.Tipe_Klustur);

        let final = setDataWithId(userState.uid, this.state.data, 'pribadi');
        if(final){
          Alert.alert('Berhasil', "Data Berhasil Disimpan!");
          this.props.navigation.goBack();
        }
      } catch (error) {
        Alert.alert('Gagal!!', error.message);
      }
      // console.log(this.state.data);
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
    if(document.type =='cancel'){
      return;
    }
    const useState = useGlobalStore.getState().userState;
    const name = document.name.toString();
    
    const findExt = name.split('.');
    
    const documentName = `${useState.uid}_${Date.now()}.${findExt[findExt.length - 1]}`;

    let buff = new Buffer.from(document.uri).toString('base64');

    const max = 1048576 * 5;

    if(!(document.size < max)){
      Alert.alert('File Kebesaran', 'File Telah Melalui Batas Maksimal');
      return;
    }
    const ext = findExt[findExt.length - 1];

    switch (ext) {
      case 'rar':
      case 'zip':
        if(document.uri.length !== 0)
          this.setState({
            data:{
              ...this.state.data,
              File: buff,
              NameFile: documentName
            }
          })
        break;
      default:
        Alert.alert('Error Tipe File', 'Tipe File yang Dipilih salah');
        break;
    }
    
    return;
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
                onChangeText={text => this.setState({data: {...this.state.data, Nama_Pengusul: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="No Handphone"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data: {...this.state.data, No_Handphone: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data:{...this.state.data, Email: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data:{...this.state.data, Alamat: text}})}
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
                onChangeText={text => this.setState({ data:{...this.state.data, Judul_Proyek: text}})}
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
                    this.setState({...this.state, data:{...this.state.data, Tipe_Klustur: value }, index: index })
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
                onChangeText={text => this.setState({ data:{...this.state.data, Deskripsi: text}})}
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
                onChangeText={text => this.setState({data:{...this.state.data, Luaran: text}})}
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
                  <Text style={[Styles.textNormalWhite, {paddingTop: 11, color: 'white'}]}>{
                    this.state.data.NameFile != '' ? this.state.data.NameFile.substr(0, 25) : "Pilih File"}...
                  </Text>
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
