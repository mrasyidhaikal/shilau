import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View,Image,Button, Dimensions,TouchableOpacity,TextInput, StatusBar,ScrollView, RefreshControl } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import Style from './../Style/Style'


class Beranda extends React.Component{
    
    constructor() {
        super()
       


        this.state = {
       
            refreshing: false,
           
        }
    }



    render(){
    
      const { navigation } = this.props;
    return(
    
        <View style={Style.container}>
        <SafeAreaView>
            <ScrollView>
            

        
     

            </ScrollView>
    
        </SafeAreaView>  
      </View>
      
    )
   
    }

}

  export default Beranda





  
