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
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Styles from './../Style/Style'
import MainUsulanStyle from '../Style/MainUsulan.style'
import AddUsulan from '../Style/AddUsulan.style'
import { Picker } from '@react-native-picker/picker'
import * as DocumentPicker from 'expo-document-picker'

class AddUsulanPerusahaan extends React.Component {
  constructor() {
    super()

    this.state = {
      refreshing: false,
      display: 1
    }
  }
  handlePress = (e) => {
    if (this.state.display >= 3) {
      return
    }
    this.setState({ display: this.state.display + 1 });
  }
  handleTitle = (display) => {
    if (display === 1) return 'A. Informasi Diri';
    if (display === 2) return 'B. Informasi Perusahaan';
    if (display === 3) return 'C. Informasi Proyek'
  }
  render() {
    const layer = 3;
    const { navigation } = this.props
    const { display } = this.state;
    return (
      <SafeAreaView style={[Styles.container, Styles.wrapper]}>
        <View style={Styles.NavBackContainer}>
          <TouchableOpacity
            style={MainUsulanStyle.BackButton}
            onPress={
              () => {
                (display === 1) ? navigation.goBack() : this.setState({ display: display - 1 })
              }}
          >
            <Icon name="arrow-back" size={32} color='#fff' />
          </TouchableOpacity>
        </View>
        <Text style={[Styles.headerText, MainUsulanStyle.AdditionalheaderText]}>
          Usulan Perusahaan
        		</Text>
        <ScrollView>
          {
            // Layer 1 Informasi Diri
          }
          <View style={[
            Styles.ContainerViewBiasa
          ]}>
            <Text style={[Styles.textNormalWhite]}>
              {
                this.handleTitle(display)
              }
            </Text>
            <View style={[
              AddUsulan.FormTextInputView,
              { display: (display === 1) ? 'flex' : 'none' }
            ]}>
              <TextInput
                placeholder="Nama Pengusul"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="No Handphone"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Email"
                keyboardType='email-address'
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
            </View>
            <View style={[
              AddUsulan.FormTextInputView,
              { display: (display === 2) ? 'flex' : 'none' }
            ]}>
              <TextInput
                placeholder="Nama Perusahaan"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Alamat"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Isi Industri atau Sektor"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Jumlah Karyawan"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
              <TextInput
                placeholder="Website"
                placeholderTextColor="#666872"
                style={[Styles.input, AddUsulan.AdditionalInputStyle]}
              />
            </View>
            <View style={[
              AddUsulan.FormTextInputView,
              { display: (display === 3) ? 'flex' : 'none' }
            ]} >
              <TextInput
                placeholderTextColor="#666872"
                placeholder="Judul Proyek"
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
                    this.setState({ selectOption: value, index: index })
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
                maxLength={40}
                style={[Styles.input, AddUsulan.AdditionalInputStyle, AddUsulan.AdditionalInputOfTextArea]}
              />
              <View>
                <Text style={Styles.textNormalWhite}>
                  Pernah komunikasi Dengan Pihak Polibatam ?
                                    </Text>
                {
                  //CheckBox Row // Checkbox Belum ada di React
                }
              </View>
              <TextInput editable={false} style={[Styles.input, AddUsulan.AdditionalInputStyle]} />

              <TextInput
                placeholder="Luaran"
                placeholderTextColor="#666872"
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
              <Text style={[Styles.textNormalWhite, { alignSelf: 'flex-start' }]}>
                NB: Maks 5 MB, FIleType: ZIP|RAR
                                </Text>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity style={[
          Styles.buttonBiru,
          MainUsulanStyle.AdditionalButton,
          AddUsulan.AdditionalButton
        ]} onPress={this.handlePress}>
          <Text style={Styles.textNormalWhite}>
            {
              (layer === display ? 'Save' : 'Next')
            }
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default AddUsulanPerusahaan
