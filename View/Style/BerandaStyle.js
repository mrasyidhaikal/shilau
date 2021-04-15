import * as React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import { biruMuda, oren, ijo } from './Style'

const BerandaStyle = StyleSheet.create({
  topBar: {
    paddingVertical: StatusBar.currentHeight + 10 || 15,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  btnAdd: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: biruMuda,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  btnCheckOut: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ijo,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  btnHapus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: oren,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  profile: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile_img: {
    width: 50,
    height: 50,
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 10,
  },
  logo: {
    width: 70,
    height: 46,
  },
})

export default BerandaStyle
