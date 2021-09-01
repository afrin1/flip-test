import React, {useState} from 'react';
import {
  Alert,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

const App = () => {
  const [searchText, onSearchTextChanged] = useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}>
        <TextInput
          placeholder=" Cari nama, bank, atau nominal"
          placeholderTextColor="#C5C5C5"
          style={styles.search}
          onChangeText={onSearchTextChanged}
          value={searchText}
          inlineImageLeft="search"
        />
        <TouchableOpacity
          onPress={() => Alert.alert('Simple Button pressed')}
          style={styles.button}>
          <Text style={styles.buttonText}>{'URUTKAN'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5C5C5',
    display: 'flex',
    flex: 1,
  },
  search: {
    color: 'black',
    fontSize: 18,
    flex: 1,
  },
  searchbar: {
    margin: 20,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#FF4500',
    justifyContent: 'flex-end',
  },
});

export default App;
