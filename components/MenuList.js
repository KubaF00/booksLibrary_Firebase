import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            style={styles.logoMenu}
            source={require('../images/logo.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate('LibraryScreen')}>
          <Image
            style={styles.logoMenu}
            source={require('../images/myLibrary.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate('AddBookScreen')}>
          <Image
            style={styles.logoMenu}
            source={require('../images/addBook.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => navigation.navigate('HistoryOfBooksScreen')}>
          <Image
            style={styles.logoMenu}
            source={require('../images/myHistory.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3782F2',
    width: '90%',
    borderRadius: 10,
    marginTop: 5,
  },
  menuContainer: {
    width: '90%',
    margin: 10,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  logoMenu: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
