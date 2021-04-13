import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Style, { putih } from '../Style/Style'
import MainStyle from '../Style/MainUsulan.style'
import { Picker } from '@react-native-picker/picker'
import BerandaStyle from '../Style/BerandaStyle'
import MainUsulanStyle from '../Style/MainUsulan.style'
import AddUsulanStyle from '../Style/AddUsulan.style'

function DetailProyek() {
  const [selectedValue, setSelectedValue] = useState('java')
  const navigation = useNavigation()
  return (
    <SafeAreaView style={Style.container}>
      <ScrollView>
        <View style={Style.NavBackContainer}>
          <TouchableOpacity
            style={MainStyle.BackButton}
            onPress={() => navigation.goBack()}
          >
            <Icon name="arrow-back" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={[Style.wrapper, BerandaStyle.titleSection]}>
          <Text style={Style.textBold}>Judul Proyek</Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity
              style={[BerandaStyle.btnCheckOut, { marginRight: 10 }]}
            >
              <Text style={{ color: putih, marginRight: 5 }}>Check Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={BerandaStyle.btnHapus}>
              <Text style={{ color: putih, marginRight: 5 }}>Hapus</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={Style.wrapper}>
          <Text style={[Style.textNormalWhite, { marginBottom: 20 }]}>
            A. Informasi Diri
          </Text>
          <TextInput
            placeholder="Nama Pengusul"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />
          <TextInput
            placeholder="No. Handphone"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />
          <TextInput
            placeholder="Alamat"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />

          <Text
            style={[Style.textNormalWhite, { marginTop: 30, marginBottom: 20 }]}
          >
            B. Informasi Proyek
          </Text>
          <TextInput
            placeholder="Judul Proyek"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />

          <View
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
                position: 'relative',
              },
            ]}
          >
            <Picker
              style={[
                Style.inputNoWidth,
                { position: 'absolute', left: 0, width: '100%', color: `#fff` },
              ]}
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              mode="dropdown"
            >
              <Picker.Item label="Tipe Cluster/Kluster" value="" />
              <Picker.Item label="Elektro" value="elektro" />
              <Picker.Item label="Informatika" value="informatika" />
              <Picker.Item label="Mesin" value="mesin" />
            </Picker>
          </View>
          <TextInput
            placeholder="Ide Proyek/Deskripsi Masalah/Spesifikasi"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />
          <TextInput
            placeholder="Luaran"
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />
          <Text style={Style.textNormalWhite}>
            Pernah komunikasi Dengan Pihak Polibatam ?
          </Text>
          <TextInput
            placeholder="....."
            placeholderTextColor="#666872"
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
          />
          <TextInput
            placeholder="Choose File"
            placeholderTextColor="#666872"
            style={[Style.inputNoWidth]}
          />
          <Text style={[Style.textNormalWhite, { marginBottom: 20 }]}>
            NB: Maks 5 MB, FIleType: ZIP|RAR
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={[
          Style.buttonBiru,
          MainUsulanStyle.AdditionalButton,
          AddUsulanStyle.AdditionalButton,
        ]}
      >
        <Text style={Style.textNormalWhite}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DetailProyek
