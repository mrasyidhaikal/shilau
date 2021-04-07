import * as React from 'react'

import { StyleSheet, Dimensions } from 'react-native'
const { width: WIDTH } = Dimensions.get('window')
const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: windowHeight,
    backgroundColor: '#05445E',
    paddingHorizontal: 20,
  },
})

export default styles
