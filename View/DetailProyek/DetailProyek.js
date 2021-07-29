import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableOpacityBase,
  Alert,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Style, { putih } from '../Style/Style'
import MainStyle from '../Style/MainUsulan.style'
import { Picker } from '@react-native-picker/picker'
import BerandaStyle from '../Style/BerandaStyle'
import MainUsulanStyle from '../Style/MainUsulan.style'
import AddUsulanStyle from '../Style/AddUsulan.style'
import * as DocumentPicker from 'expo-document-picker'
import { checkEmailFormat, checkLengthDesk, checkLengthNoPhone, checkTipeKlustur } from '../../utils/utility'
import { updateStatus, updateUsulan } from '../../utils/update'
import useGlobalStore from '../store/useGlobalStore'
import { auth } from '../../utils/firebase'
import { Buffer } from 'buffer';
import { deleteUsulan } from '../../utils/delete'

function DetailProyek({ route }) {
  const userState = useGlobalStore(state => state.userState)
  
  const [dataUsulan, setDataUsulan] = useState({
    Alamat: '',
    Deskripsi: '',
    Email: '',
    Judul_Proyek: '',
    Luaran: 'asdasdsad',
    Nama_Pengusul: '',
    NameFile: '',
    No_Handphone: '',
    Status: 0,
    Tanggal_Pengajuan: '',
    Tipe_Klustur: '',
    id: '',
    dateIdNumber: '',
    collection: '',
    File: ''
  })

  const [enabled, setEnable] = useState(false);
  const navigation = useNavigation()

  useEffect(() => {
    const { params: { dataUsulan } } = route
    if(dataUsulan.Status == 1){
      setEnable(true)
    }
    setDataUsulan(dataUsulan)
  }, [])


  const onPressSave = async (e) => {
    checkEmailFormat(dataUsulan.Email);
    checkLengthNoPhone(dataUsulan.No_Handphone);
    checkLengthDesk(dataUsulan.Deskripsi);
    checkTipeKlustur(dataUsulan.Tipe_Klustur);
    try {
      const {id, dateIdNumber, collection, Tanggal_Pengajuan, ...usulan} = dataUsulan;

      // console.log(usulan);
      let res = await updateUsulan(userState.uid, id, usulan, collection);
      if(res){
        Alert.alert('Berhasil', 'Data Berhasil Di Update');
        navigation.goBack();
      }else{
        Alert.alert('Gagal', 'Gagal Update');
      }
    } catch (error) {
      console.log(error);
    }
    
  }
  const handlePickDocument = async () => {
    let document = await DocumentPicker.getDocumentAsync()
    if(document.type =='cancel'){
      return;
    }

    // console.log(userState);
    const name = document.name.toString();
    
    const findExt = name.split('.');
    
    const documentName = `${userState.uid}_${Date.now()}.${findExt[findExt.length - 1]}`;

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
          setDataUsulan({...dataUsulan, File: buff, NameFile: documentName})
        break;
      default:
        Alert.alert('Error Tipe File', 'Tipe File yang Dipilih salah');
        break;
    }
    
    return;
  }
  const handleStatusBelumCheckout = async () => {
    const {id, dateIdNumber, collection, Tanggal_Pengajuan, ...usulan} = dataUsulan;
    let res = await updateStatus(userState.uid, id, usulan, collection);
    if(res){
      navigation.goBack();
    }
  }

  const handleHapus = async () => {
    const {id, dateIdNumber, collection, Tanggal_Pengajuan, ...usulan} = dataUsulan;
    let res = await deleteUsulan(userState.uid, id, usulan, collection)
    if(res){
      navigation.goBack();
    }
  }
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
              onPress={handleStatusBelumCheckout}
              disabled={enabled}
            >
              <Text style={{ color: putih, marginRight: 5 }}>Check Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={BerandaStyle.btnHapus} onPress={handleHapus}>
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
            value={dataUsulan.Nama_Pengusul}
            onChangeText={text => setDataUsulan({...dataUsulan, Nama_Pengusul: text})}
          />
          <TextInput
            placeholder="No. Handphone"
            placeholderTextColor="#666872"
            value={dataUsulan.No_Handphone}
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
            onChangeText={text => setDataUsulan({...dataUsulan, No_Handphone: text})}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#666872"
            value={dataUsulan.Email}
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
            onChangeText={text => setDataUsulan({...dataUsulan, Email: text})}
          />
          <TextInput
            placeholder="Alamat"
            placeholderTextColor="#666872"
            value={dataUsulan.Alamat}
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
            onChangeText={text => setDataUsulan({...dataUsulan, Alamat: text})}
          />

          <Text
            style={[Style.textNormalWhite, { marginTop: 30, marginBottom: 20 }]}
          >
            B. Informasi Proyek
          </Text>
          <TextInput
            placeholder="Judul Proyek"
            placeholderTextColor="#666872"
            value={dataUsulan.Judul_Proyek}
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
            onChangeText={text => setDataUsulan({...dataUsulan, Judul_Proyek: text})}
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
              selectedValue={dataUsulan.Tipe_Klustur}
              onValueChange={(itemValue, itemIndex) =>
                setDataUsulan({ ...dataUsulan, Tipe_Klustur: itemValue })
              }
              mode="dropdown"
            >
              <Picker.Item label="Tipe Kluster" enabled={false} />
              <Picker.Item label="Web Application" value="Web Application" />
              <Picker.Item
                label="Mobile Application"
                value="Mobile Application"
              />
              <Picker.Item label="Big Data" value="Big Data" />
            </Picker>
          </View>
          <TextInput
            placeholder="Ide Proyek/Deskripsi Masalah/Spesifikasi"
            placeholderTextColor="#666872"
            value={dataUsulan.Deskripsi}
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
            onChangeText={text => setDataUsulan({...dataUsulan, Deskripsi: text})}
          />
          <TextInput
            placeholder="Luaran"
            placeholderTextColor="#666872"
            value={dataUsulan.Luaran}
            style={[
              Style.inputNoWidth,
              {
                marginBottom: 20,
              },
            ]}
            onChangeText={text => setDataUsulan({...dataUsulan, Luaran: text})}
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
          <Text style={{color: 'white', marginBottom: 3}}>Pilih File</Text>
          <TouchableOpacity
            placeholder="Choose File"
            placeholderTextColor="#666872"
            style={[Style.inputNoWidth]}
            onPress={handlePickDocument}
          >
            <Text style={{paddingTop: 11, color: 'white'}}>{dataUsulan.NameFile.substr(0, 30)}...</Text>
          </TouchableOpacity>
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
        onPressOut={onPressSave}
      >
        <Text style={Style.textNormalWhite}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DetailProyek
