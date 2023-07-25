import React from 'react';
import {View,Text,Button,StyleSheet,SafeAreaView,Dimensions} from 'react-native';


import Lottie from 'lottie-react-native';

const {width,height}=Dimensions.get('window');

export default function Home(){
    return(
        <SafeAreaView  style={styles.container}>
        <View  style={styles.lottie}>
        <Lottie source={require('../Assets/Animation/homeaniamtion.json')} autoPlay loop />


        </View>
        </SafeAreaView>
    )
}

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
    

