import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../DemoScreens/HomeScreen';
import UserScreen from '../DemoScreens/UserScreen';
import ProductScreen from '../DemoScreens/ProductScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Product" component={ProductScreen} />
        <Tab.Screen name="User" component={UserScreen} />

      </Tab.Navigator>
    )
}

export default BottomTab
const styles = StyleSheet.create({})