/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import RegisterPanel from './RegisterPanel.js';
import LibraryScreen from './screens/LibraryScreen.js';
import AddBookScreen from './screens/AddBookScreen.js';
import HistoryOfBooksScreen from './screens/HistoryOfBooksScreen.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Login',
            headerShown: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'HomeScreen',
            headerStyle: {
              backgroundColor: '#0782F9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{
            title: 'LibraryScreen',
            headerStyle: {
              backgroundColor: '#0782F9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="AddBookScreen"
          component={AddBookScreen}
          options={{
            title: 'AddBookScreen',
            headerStyle: {
              backgroundColor: '#0782F9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HistoryOfBooksScreen"
          component={HistoryOfBooksScreen}
          options={{
            title: 'HistoryOfBooksScreen',
            headerStyle: {
              backgroundColor: '#0782F9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="RegisterPanel"
          component={RegisterPanel}
          options={{
            title: 'Registration Panel',
            headerStyle: {
              backgroundColor: '#0782F9',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
