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
import { auth } from '../../utils/firebase'

function HeaderComponent() {
  const navigation = useNavigation()

  React.useEffect(() => {
    const user = auth.currentUser
    console.log(user)
  }, [])

  return (
    <>
      <View style={[BerandaStyle.topBar, Style.wrapper]}>
        <View style={BerandaStyle.profile}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfileStack', { screen: 'DataUser' })
            }
          >
            <View style={BerandaStyle.profile_img}>
              <Image
                style={{ width: '100%', height: '100%' }}
                source={require('../../assets/placeholder-user.png')}
              />
            </View>
          </TouchableOpacity>
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
        <TouchableOpacity
          style={BerandaStyle.btnAdd}
          onPress={() =>
            navigation.navigate('AddUsulanStack', { screen: 'MainUsulan' })
          }
        >
          <Text style={{ color: putih, marginRight: 5 }}>Tambah Proyek</Text>
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
