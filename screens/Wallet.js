import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../constants';

const Wallet = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bgColor,
      }}>
      <Text>Screen 2</Text>
    </View>
  );
};

export default Wallet;