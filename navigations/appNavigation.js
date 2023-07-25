import React,{useEffect,useState} from 'react';
import{NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}from "@react-navigation/native-stack";

import {COLORS, ROUTES} from '../constants';


import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen'
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProductScreen from '../screens/ProductScreen';
import CameraScreen from '../screens/CameraScreen';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';


 


const Stack=createNativeStackNavigator();
export default function AppNavigation(){
    

  return (
      <NavigationContainer>

          <Stack.Navigator initialRouteName='Onboarding'>
              <Stack.Screen name='Onboarding'options={{headerShown:false}} component={OnboardingScreen}/>
              <Stack.Screen name='Welcome'options={{headerShown:false}} component={WelcomeScreen}/>
              <Stack.Screen name='SignUp'options={{headerShown:false}} component={SignUpScreen}/>
              <Stack.Screen name='Login'options={{headerShown:false}} component={LoginScreen}/>
              <Stack.Screen name='Camera'options={{headerShown:false}} component={CameraScreen}/>
              <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
              
              <Stack.Screen name={"Home"}options={{headerShown:false}} component={HomeScreen}/>

              <Stack.Screen name={ROUTES.HOME_TAB}options={{headerShown:false}} component={BottomTabNavigator}/>
              <Stack.Screen name={ROUTES.SETTINGS}options={{headerShown:false}} component={BottomTabNavigator}/>
              <Stack.Screen name={ROUTES.HOME_DRAWER}options={{headerShown:false}} component={DrawerNavigator}/>

          </Stack.Navigator>

      </NavigationContainer>


  )
}