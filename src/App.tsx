import React from 'react'
import {
  SafeAreaView,
  StyleSheet
} from 'react-native'
import { colors } from './theme'
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
    backgroundColor: colors.GRAY,
    flex: 1,
  }
})

export default App
