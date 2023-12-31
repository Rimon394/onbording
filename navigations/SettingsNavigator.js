import React from 'react';
import {createNativeStackNavigator}from "@react-navigation/native-stack";

import SettingsDetail from '../screens/SettingsDetail';
import Settings from '../screens/Settings';
import {ROUTES} from '../constants';

const Stack = createNativeStackNavigator();

function SettingsNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
      <Stack.Screen name={ROUTES.SETTINGS_DETAIL} component={SettingsDetail} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;
