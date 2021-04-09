import * as React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import BerandaStyle from '../Style/BerandaStyle'
import Style, { putih } from '../Style/Style'
import { useNavigation } from '@react-navigation/native'

function HeaderComponent() {
  const navigation = useNavigation()
  return (
    <>
      <View style={[BerandaStyle.topBar, Style.wrapper]}>
        <View style={BerandaStyle.profile}>
          <View style={BerandaStyle.profile_img}>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../../assets/person-female.jpg')}
            />
          </View>
          <View>
            <Text style={Style.textNormalWhite}>Selamat Datang</Text>
            <Text style={Style.textBold}>Clara Laudia</Text>
          </View>
        </View>
        <View style={BerandaStyle.logo}>
          <ImageBackground
            style={{ width: '100%', height: '100%' }}
            source={require('../../assets/poltek.png')}
          />
        </View>
      </View>

      <View style={[Style.wrapper, BerandaStyle.titleSection]}>
        <Text style={Style.textBold}>Status Proyek</Text>
        <TouchableOpacity style={BerandaStyle.btnAdd}>
          <Text style={{ color: putih, marginRight: 5 }}>Add</Text>
          <Icon
            style={{ fontSize: 24, color: putih }}
            name="add-circle-outline"
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default HeaderComponent
