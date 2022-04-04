import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {db} from '../firebase';
import {collection, getDocs} from 'firebase/firestore';

const BooksList = () => {
  const [booksHomeScreen, setBooksHomeScreen] = useState([]);

  useEffect(() => {
    async function getCities() {
      const booksHomeScreenCol = collection(db, 'booksHomeScreen');
      const booksHomeScreenSnapshot = await getDocs(booksHomeScreenCol);
      const booksHomeScreenList = booksHomeScreenSnapshot.docs.map(docs =>
        docs.data(),
      );
      setBooksHomeScreen(booksHomeScreenList);
    }

    getCities();
  }, [booksHomeScreen]);

  const ListOfBooks = () => {
    return booksHomeScreen.map(element => {
      return (
        <View style={styles.bookCoverContainer} key={element.title}>
          <Image style={styles.bookCoverPage} source={{uri: element.picture}} />
          <Text style={styles.textBookContainer}>{element.title}</Text>
          <Text style={styles.textBookContainer}>{element.author}</Text>
        </View>
      );
    });
  };

  return (
    <View>
      <View style={styles.bookContainer}>
        <ListOfBooks />
      </View>
    </View>
  );
};

export default BooksList;

const styles = StyleSheet.create({
  bookContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 470,
    marginTop: 20,
  },
  bookCoverContainer: {
    width: 140,
    height: 180,
    margin: 5,
    marginBottom: 60,
  },
  bookCoverPage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  textBookContainer: {
    textAlign: 'center',
    fontSize: 14,
  },
});
