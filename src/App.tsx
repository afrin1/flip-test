import React from 'react'
import {
  SafeAreaView,
  StyleSheet
} from 'react-native'
import Transactions from './transactions/Transactions'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Transactions />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C5C5C5',
    display: 'flex',
    flex: 1,
  }
})

export default App
