import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Styles from './../Style/Style'
import MainUsulanStyle from '../Style/MainUsulan.style'
import AddUsulan from '../Style/AddUsulan.style'
import { Picker } from '@react-native-picker/picker'
import * as DocumentPicker from 'expo-document-picker'
import useGlobalStore from '../store/useGlobalStore'
import { Buffer } from 'buffer';
import { setDataWithId } from '../../utils/set';
import { checkEmailFormat, checkLengthDesk, checkLengthNoPhone, checkTipeKlustur, checkUrlWebsite } from '../../utils/utility'

class AddUsulanPerusahaan extends React.Component {
  constructor() {
    super()

    this.state = {
      refreshing: false,
      display: 1,
      data: {
        Nama_Pengusul:'',
        No_Handphone:'',
        Email:'',
        Alamat: '',
        Nama_Perusahaan: '',
        Alamat_Perusahaan: '',
        Isi_Industri_atau_Sektor: '',
        Jumlah_Karyawan: '',
        Website_Perusahaan: '',
        Judul_Proyek:'',
        Tipe_Klustur: '',
        Deskripsi:'',
        Luaran:'',
        File: null,
        NameFile:''
      }
    }
  }

  
  handlePress = (e) => {
    if (this.state.display >= 3) {
      const userState = useGlobalStore.getState().userState
      try {

        checkEmailFormat(this.state.data.Email);
        checkLengthNoPhone(this.state.data.No_Handphone);
        checkLengthDesk(this.state.data.Deskripsi);
        checkTipeKlustur(this.state.data.Tipe_Klustur);
        checkUrlWebsite(this.state.data.Website_Perusahaan)
        // console.log(this.state.data);
        let final = setDataWithId(userState.uid, this.state.data, 'perusahaan');  
        if(final){
          Alert.alert('Berhasil!!', "Data Berhasil Disimpan!");
          this.props.navigation.goBack();
        }
      } catch (error) {
        Alert.alert('Gagal!!', error.message);
      }
      return
    }
    this.setState({ display: this.state.display + 1 })
  }
  handleTitle = (display) => {
    if (display === 1) return 'A. Informasi Diri'
    if (display === 2) return 'B. Informasi Perusahaan'
    if (display === 3) return 'C. Informasi Proyek'
  }
  handlePickDocument = async () => {
    let document = await DocumentPicker.getDocumentAsync()
    if(document.type == 'cancel'){
      return;
    }
    const useState = useGlobalStore.getState().userState;
    const name = document.name.toString();
    
    const findExt = name.split('.');
    
    const documentName = `${useState.uid}_${Date.now()}.${findExt[findExt.length - 1]}`;

    let buff = new Buffer.from(document.uri).toString('base64');

    let getLengthFile = document.size / 1048576;
    const max = 1048576 * 5;

    if(!(getLengthFile < max)){
      Alert.alert('File Kebesaran', 'File Telah Melalui Batas Maksimal');
      return;
    }
    const ext = findExt[findExt.length - 1]; 
    if( ext !== 'rar' || ext !== 'zip' ){
      Alert.alert('Format File', 'Format File Salah');
      return;
    }
    if(document.uri.length !== 0)
      this.setState({
        data:{
          ...this.state.data,
          File: buff,
          NameFile: documentName
        }
      })
  }

  render() {
    const layer = 3
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
          Usulan Perusahaan
        </Text>
        <ScrollView>
          {
            // Layer 1 Informasi Diri
          }
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
                onChangeText={text => this.setState({data:{...this.state.data, Nama_Pengusul: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="No Handphone"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data:{...this.state.data, No_Handphone: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={text => this.setState({data:{...this.state.data, Email:text}})}
                placeholderTextColor="#666872"
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
                placeholder="Nama Perusahaan"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data:{...this.state.data, Nama_Perusahaan: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Alamat Perusahaan"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data: {...this.state.data, Alamat_Perusahaan: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Isi Industri atau Sektor"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data:{...this.state.data, Isi_Industri_atau_Sektor: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Jumlah Karyawan"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data: {...this.state.data, Jumlah_Karyawan: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Website Perusahaan"
                placeholderTextColor="#666872"
                onChangeText={text => this.setState({data:{...this.state.data, Website_Perusahaan: text}})}
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
            </View>
            <View
              style={[
                AddUsulan.FormTextInputView,
                { display: display === 3 ? 'flex' : 'none' },
              ]}
            >
              <TextInput
                placeholderTextColor="#666872"
                placeholder="Judul Proyek"
                onChangeText={text => this.setState({data:{...this.state.data, Judul_Proyek: text}})}
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
                    this.setState({ ...this.state, data:{...this.state.data, Tipe_Klustur: value}, index: index })
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
                onChangeText={text => this.setState({data:{...this.state.data, Deskripsi: text}})}
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
                <TouchableOpacity onPress={this.handlePickDocument}>
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

export default AddUsulanPerusahaan
