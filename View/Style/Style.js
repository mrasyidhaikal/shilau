import * as React from 'react'

import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
const windowHeight = Dimensions.get('window').height

const biruMuda = '#189AB4'
const putih = '#fff'
const biruGelap = '#05445E'
const dark = '#002635'
const grey = '#666872'
const ijo = '#2DAF7E'
const ungu = '#9078F3'
const oren = '#FD7557'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05445E',
  },
  headerText: {
    fontSize: 25,
    color: putih,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  textBold: {
    fontSize: 20,
    color: putih,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },
  textNormalWhite: {
    fontSize: 16,
    color: putih,
  },
  buttonUngu: {
    backgroundColor: ungu,
    borderRadius: 10,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  buttonIjo: {
    backgroundColor: ijo,
    borderRadius: 10,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  buttonOren: {
    backgroundColor: oren,
    borderRadius: 10,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  buttonBiru: {
    backgroundColor: oren,
    borderRadius: 10,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  buttonGhost: {
    borderRadius: 10,
    borderColor: greyText,
    backgroundColor: biruGelap,
    borderWidth: 2,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 20,
    backgroundColor: dark,
    color: putih,
  },
  NavBackContainer: {
    marginLeft: 20,
    marginTop: windowHeight / 20,
  },
  ContainerViewBiasa: {
    marginHorizontal: 25,
    marginBottom: 25,
  },
})

export default styles
