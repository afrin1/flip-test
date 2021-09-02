import React, { useState } from 'react'
import {
  Alert,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native'
import {PrimaryButton} from './components/Button'
import TransactionList from './transactions/TransactionList'

const App = () => {
  const [searchText, onSearchTextChanged] = useState<string>('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor="#C5C5C5"
          style={styles.search}
          onChangeText={onSearchTextChanged}
          value={searchText}
          inlineImageLeft="search"
        />
        <PrimaryButton title={'URUTKAN V'} />
      </View>
      <TransactionList />
    </SafeAreaView>
  )
}

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
  searchBar: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'row',
  },
})

export default App
