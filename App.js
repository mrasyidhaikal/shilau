import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import berandaScreen from './View/Beranda/Beranda'
import usulanPerusahaan from './View/AddUsulan/AddUsulanPerusahaan'
import DetailProyek from './View/DetailProyek/DetailProyek'
import MainUsulan from './View/AddUsulan/MainUsulan'
import AddUsulanPribadi from './View/AddUsulan/AddUsulanPribadi'
import RegisterScreen from './View/Login&Register/RegisterScreen'
import LoginScreen from './View/Login&Register/LoginScreen'
import DataUser from './View/Profile/DataUser'
import { biruGelap, dark, grey, biruMuda } from './View/Style/Style'
import useAuthStore from './View/store/useAuthStore'
import DetailProyekPerusahaan from './View/DetailProyek/DetailProyekPerusahaan'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from './utils/firebase'
import useGlobalStore from './View/store/useGlobalStore'

const Tab = createBottomTabNavigator()
const AuthStack = createStackNavigator()
const Main = createStackNavigator()
const Usulan = createStackNavigator()
const ProyekStack = createStackNavigator()
const RegisterStack = createStackNavigator()
const Profile = createStackNavigator()

LogBox.ignoreLogs(['Setting a timer']) // Membuang Error SetTimeout
const AppTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FF3737',
        inactiveTintColor: '#B2B5BF',
        showLabel: false,
        style: {
          backgroundColor: dark,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={berandaScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={biruMuda} size={30} />
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
      <Main.Screen name="DetailProyek" component={HandleProyekStack} />
      <Main.Screen name="ProfileStack" component={ProfileStack} />
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

const HandleProyekStack = () => {
  return (
    <ProyekStack.Navigator screenOptions={{ headerShown: false }}>
      <ProyekStack.Screen name="DetailProyek" component={DetailProyek} />
      <ProyekStack.Screen
        name="DetailProyekPerusahaan"
        component={DetailProyekPerusahaan}
      />
    </ProyekStack.Navigator>
  )
}

const RegisterAndLoginStack = () => {
  return (
    <RegisterStack.Navigator screenOptions={{ headerShown: false }}>
      <RegisterStack.Screen name="LoginScreen" component={LoginScreen} />
      <RegisterStack.Screen name="RegisterScreen" component={RegisterScreen} />
    </RegisterStack.Navigator>
  )
}

const ProfileStack = () => {
  return (
    <Profile.Navigator screenOptions={{ headerShown: false }}>
      <Profile.Screen name="DataUser" component={DataUser} />
    </Profile.Navigator>
  )
}

export default function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn)
  console.log('Berhasil Login: ', isLoggedIn)

  useEffect(() => {
    const getAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setIsLoggedIn(true)
        } else {
          setIsLoggedIn(false)
        }
      })
    }
    getAuth()
  }, [])

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor={biruGelap} />
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <AuthStack.Screen name="MainStack" component={MainStack} />
        ) : (
          <AuthStack.Screen
            name="LoginNRegister"
            component={RegisterAndLoginStack}
          />
        )}
      </AuthStack.Navigator>
    </NavigationContainer>
  )
}
