import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Account from './screen/Account';
import Mebelku from './screen/Mebelku';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Beranda from './screen/Beranda';
import tab from './screen/tab';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Mebelku' component={Mebelku} options={{
        tabBarLabel: 'Mebelku',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
    
      }} />
    <Tab.Screen name='Account' component={Account} options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
    
    }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
};
  

export default App

const styles = StyleSheet.create({});
