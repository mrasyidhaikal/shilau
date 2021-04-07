import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import berandaScreen from './View/Beranda/Beranda'
import usulanPerusahaan from './View/AddUsulan/AddUsulanPerusahaan'

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
          backgroundColor: '#fff',
          paddingBottom: 10,
          borderTopWidth: 0,
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
    <Main.Navigator screenOptions={{ headerShown: false }}>
      <Main.Screen name="AppTabs" component={AppTabs} />
      <Main.Screen name="AddUsulanStack" component={AddUsulanStack} />
    </Main.Navigator>
  )
}

const AddUsulanStack = () => {
  return (
    <Usulan.Navigator>
      <Usulan.Screen name="usulanPerusahaan" component={usulanPerusahaan} />
    </Usulan.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
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
