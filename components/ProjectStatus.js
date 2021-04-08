import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  RefreshControl,
  ImageBackground,
} from 'react-native'
import { biruMuda, ijo, putih, ungu } from '../View/Style/Style'

function ProjectStatus({ status }) {
  const handleColor = (data) => {
    if (data === 'belum check out') {
      return biruMuda
    }
    if (data === 'selesai') {
      return ijo
    }
    if (data === 'lihat tracking') {
      return ungu
    }
  }

  return (
    <View
      style={{
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        backgroundColor: handleColor(status),
        borderRadius: 50,
        marginLeft: 'auto',
      }}
    >
      <Text
        style={{
          color: putih,
          textAlign: 'center',
          fontSize: 12,
          textTransform: 'capitalize',
        }}
      >
        {status}
      </Text>
    </View>
  )
}

export default ProjectStatus
