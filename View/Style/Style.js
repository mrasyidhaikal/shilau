import * as React from 'react';

import { StyleSheet,Dimensions } from 'react-native';
const { width: WIDTH} = Dimensions.get('window');
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default styles