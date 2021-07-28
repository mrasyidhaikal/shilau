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
import { HandleTextStatus } from '../utils/utility'
import { biruMuda, ijo, putih, ungu } from '../View/Style/Style'

function ProjectStatus({ status }) {
  const handleColor = (data) => {
    if (data === 0) {
      return biruMuda
    }
    if (data === 1) {
      return ungu
    }
    if (data === 2) {
      return ijo
    }
  }

  return (
    <View
      style={{
        paddingVertical: 3,
        paddingHorizontal: 10,
        alignSelf: 'flex-start',
        backgroundColor: handleColor(status),
        borderRadius: 60,
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
        {HandleTextStatus(status)}
      </Text>
    </View>
  )
}

export default ProjectStatus
