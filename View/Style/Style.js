import { StyleSheet, Dimensions } from 'react-native'

export const WIDTH = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const biruMuda = '#189AB4'
export const putih = '#fff'
export const biruGelap = '#05445E'
export const dark = '#002635'
export const grey = '#666872'
export const ijo = '#2DAF7E'
export const ungu = '#9078F3'
export const oren = '#FD7557'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05445E',
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 25,
    color: putih,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textBold: {
    fontSize: 20,
    color: putih,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textNormalWhite: {
    fontSize: 16,
    color: putih,
  },
  textNormalGrey: {
    fontSize: 16,
    color: grey,
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
    backgroundColor: biruMuda,
    borderRadius: 10,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  buttonGhost: {
    borderRadius: 10,
    borderColor: putih,
    backgroundColor: biruGelap,
    borderWidth: 1,
    width: WIDTH - 55,
    height: 50,
    justifyContent: 'center',
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 20,
    backgroundColor: dark,
    color: putih,
  },
  inputNoWidth: {
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 20,
    backgroundColor: dark,
    color: putih,
  },
  inputLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 55,
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

  inputContainer: {
    marginTop: 10,
  },
  inputIcon: {
    position: 'absolute',
    borderColor: '#666872',
    top: 8,
    left: 17,
    paddingRight: 5,
    borderRightWidth: 1,
  },
  btnEye: {
    position: 'absolute',
    top: 8,
    right: 20,
  },
})

export default styles
