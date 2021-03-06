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
import useGlobalStore from '../store/useGlobalStore'

function HeaderComponent() {
  const navigation = useNavigation()
  const userState = useGlobalStore((state) => state.userState)
  return (
    <>
      <View style={[BerandaStyle.topBar, Style.wrapper]}>
        <View style={[BerandaStyle.profile, { flex: 2 }]}>
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
            <Text style={[Style.textBold, { fontSize: 18 }]}>
              {userState?.fullName.length < 16
                ? `${userState?.fullName}`
                : `${userState?.fullName.substring(0, 13)}...`}
            </Text>
          </View>
        </View>
        <View style={[BerandaStyle.logo, { flex: 1, alignItems: 'flex-end' }]}>
          <ImageBackground
            style={{ width: 78, height: 50 }}
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
