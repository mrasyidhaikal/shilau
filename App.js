import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import berandaScreen from './View/Beranda/Beranda'
import usulanPerusahaan from './View/AddUsulan/AddUsulanPerusahaan'
import MainUsulan from './View/AddUsulan/MainUsulan';
import AddUsulanPribadi from './View/AddUsulan/AddUsulanPribadi';
import { biruGelap, dark, grey } from './View/Style/Style'

const Tab = createBottomTabNavigator()
const AuthStack = createStackNavigator()
const Main = createStackNavigator()
const Usulan = createStackNavigator()

const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF3737',
        inactiveTintColor: '#B2B5BF',
        style: {
          backgroundColor: dark,
          paddingBottom: 5,
          borderTopWidth: 0.5,
          borderBottomColor: grey,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={berandaScreen}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({ color }) => (
            <Icon name="ios-home-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const MainStack = () => {
  return (
    <Main.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Main.Screen name="AppTabs" component={AppTabs} />
      <Main.Screen name="AddUsulanStack" component={AddUsulanStack} />
    </Main.Navigator>
  )
}

const AddUsulanStack = () => {
  return (
    <Usulan.Navigator screenOptions={{ headerShown: false }}>
      <Usulan.Screen name="MainUsulan" component={MainUsulan} />
      <Usulan.Screen name="AddUsulanPribadi" component={AddUsulanPribadi} />
      <Usulan.Screen name="usulanPerusahaan" component={usulanPerusahaan} />
    </Usulan.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={biruGelap} />
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="MainStack" component={MainStack} />
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
