import React from 'react';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from '../modules/Auth/Login';
import Home from '../modules/Home';
import AboutUs from '../modules/AboutUs';
import Settings from '../modules/Settings';
import Profile from '../modules/Profile';

import { tabIcons } from './helper';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const myTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home';
          } else if (route.name === 'AboutUs') {
            iconName = focused ? 'supervised-user-circle' : 'supervised-user-circle';
          } else if (route.name === 'Setting') {
            iconName = focused ? 'settings' : 'settings';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'face' : 'face';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="AboutUs" component={AboutUs} />
      <Tab.Screen name="Setting" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};


const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Login'} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={myTabs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Setting" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
