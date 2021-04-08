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
import Icon from 'react-native-vector-icons/Ionicons'
import Style, { putih, biruMuda, ijo, dark, grey } from '../View/Style/Style'
import ProjectStatus from './ProjectStatus'
function Project({ data: { id, title, status, date } }) {
  return (
    <View style={styles.project_item}>
      <View style={styles.project_item_top}>
        <Icon
          style={{ fontSize: 24, color: biruMuda }}
          name="ios-hourglass-outline"
        />
        <Text style={[Style.textNormalWhite, { marginLeft: 10 }]}>
          {title ? title : 'Judul Proyek'}
        </Text>
        <ProjectStatus status={status} />
      </View>
      <View style={styles.project_item_bottom}>
        <Text style={{ color: putih, fontSize: 14 }}>{id ? id : '0000'}</Text>
        <Text style={{ color: putih, fontSize: 14, marginLeft: 'auto' }}>
          {date ? date : '00 00 0000'}
        </Text>
      </View>
      <View style={styles.project_item_bottom}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  project_item: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: dark,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  project_item_top: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: grey,
  },
  project_item_bottom: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
})
export default Project
