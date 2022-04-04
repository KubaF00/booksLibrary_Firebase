import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {auth, db} from '../../firebase';
import MenuList from '../MenuList';
import {useNavigation} from '@react-navigation/core';
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';

const HistoryOfBooksScreen = () => {
  const [booksHistoryData, setBooksHistoryData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function getCities() {
      const citiesCol = collection(db, 'booksHistory');
      const citySnapshot = await getDocs(citiesCol);
      setBooksHistoryData(
        citySnapshot.docs.map(docum => {
          return {...docum.data(), id: docum.id};
        }),
      );
    }

    getCities();
  }, [booksHistoryData]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      // eslint-disable-next-line no-alert
      .catch(error => alert(error.message));
  };

  const handleDeleteElement = elementID => {
    booksHistoryData.forEach(element => {
      if (element.id === elementID) {
        deleteDoc(doc(db, 'booksHistory', elementID));
        console.log('Delete element with id: ' + elementID);
      }
    });
  };

  const ListOfBooks = () => {
    return booksHistoryData.map(element => {
      return (
        <View style={styles.bookCoverContainer} key={element.id}>
          <Image style={styles.bookCoverPage} source={{uri: element.picture}} />
          <View style={styles.textBookContainerView}>
            <Text style={styles.textBookContainer}>{element.title}</Text>
            <Text style={styles.textBookContainer}>{element.author}</Text>
            <Text style={styles.textBookContainer}>{element.year}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => handleDeleteElement(element.id)}>
                <Text style={styles.buttonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View>
        <MenuList />
      </View>
      <ScrollView style={styles.bookContainer}>
        <ListOfBooks />
      </ScrollView>
      <View style={styles.bookListContainer} />
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HistoryOfBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookListContainer: {
    flex: 1,
    width: '90%',
    margin: 'auto',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  bookContainer: {
    width: '90%',
    height: 420,
    marginTop: 20,
  },
  bookCoverContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: 135,
    marginBottom: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#0782F9',
  },
  bookCoverPage: {
    width: 90,
    height: 130,
    borderRadius: 5,
  },
  textBookContainerView: {
    width: '70%',
  },
  textBookContainer: {
    textAlign: 'center',
    fontSize: 17,
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonDone: {
    backgroundColor: '#0782F9',
    width: '40%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  buttonDelete: {
    backgroundColor: 'red',
    width: '40%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
});
