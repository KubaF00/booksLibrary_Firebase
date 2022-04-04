import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import MenuList from '../MenuList';
import {db} from '../../firebase';
import {collection, addDoc} from 'firebase/firestore';

const AddBookScreen = () => {
  const [bookName, setBookName] = useState('');
  const [dataBookJson, setDataBookJson] = useState('');

  //book variables
  const [id, setID] = useState(0);
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [description, setDescription] = useState('');

  const getData = async () => {
    const apiKey = 'AIzaSyCnlDv5Kg1DEg7ELWUlfg0zw9E52Eghc2A';
    const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${bookName}&printType=books&key=${apiKey}`;

    try {
      const response = await fetch(apiURL);
      const json = await response.json();
      setDataBookJson(...json.items);
    } catch (error) {
      console.error(error);
    }

    setPicture(dataBookJson.volumeInfo.imageLinks.smallThumbnail);
    setTitle(dataBookJson.volumeInfo.title);
    setAuthor(dataBookJson.volumeInfo.authors[0]);
    setYear(dataBookJson.volumeInfo.publishedDate);
    setDescription(dataBookJson.volumeInfo.description);
  };

  async function getCities() {
    await addDoc(collection(db, 'books'), {
      id: id,
      picture: picture,
      title: title,
      author: author,
      year: year,
      description: description,
    });
    setID(id + 1);
  }

  return (
    <View style={styles.container}>
      <View>
        <MenuList />
      </View>
      <View style={styles.bookListContainer}>
        <View>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Search book title..."
              value={bookName}
              onChangeText={text => {
                setBookName(text.toUpperCase());
              }}
              style={styles.inputBook}
            />
            <TouchableOpacity onPress={getData} style={styles.button}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView style={styles.bookContainer}>
              <View style={styles.pictureContainer}>
                <Image style={styles.bookCoverPage} source={{uri: picture}} />
              </View>
              <Text style={styles.textBookContainer}>{title}</Text>
              <Text style={styles.textBookContainer}>{author}</Text>
              <Text style={styles.textBookContainerYear}>{year}</Text>
              <Text style={styles.textBookContainerDesc}>{description}</Text>
            </ScrollView>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={getCities} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Add Book to My List</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddBookScreen;

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
  containerInput: {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  inputBook: {
    textAlign: 'center',
    width: '70%',
    fontSize: 18,
    borderColor: '#0782F9',
    borderWidth: 2,
    borderRadius: 10,
  },
  button: {
    width: '25%',
    marginLeft: '5%',
    fontSize: 18,
    backgroundColor: '#0782F9',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookContainer: {
    width: '100%',
    height: 450,
    marginTop: 25,
  },
  pictureContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  bookCoverPage: {
    width: 150,
    height: 210,
    borderRadius: 5,
    marginBottom: 10,
  },
  textBookContainer: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
    color: 'grey',
  },
  textBookContainerYear: {
    textAlign: 'center',
    fontSize: 18,
  },
  textBookContainerDesc: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
});
