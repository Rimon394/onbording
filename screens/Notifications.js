import React from 'react';
import {StyleSheet, Text, View,Dimensions,SafeAreaView  } from 'react-native';
import {COLORS} from '../constants';
import Lottie from 'lottie-react-native';
const {width,height}=Dimensions.get('window');

const Notifications = () => {
  return (
    <SafeAreaView  style={styles.container}>
        <View  style={styles.lottie}>
        <Lottie source={require('../Assets/Animation/homeaniamtion.json')} autoPlay loop />


        </View>
        </SafeAreaView>
    )
}
export default Notifications;

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#FF8B02'
    },
    lottie:{
        width: width*0.9,
        height:width
      },
    })
    