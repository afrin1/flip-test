import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import TransactionItem from './TransactionItem'
import { Transaction } from './types'

interface TransactionListProps {
  data: Transaction[]
}

const TransactionList = (props: TransactionListProps) => {
  const { data } = props
  const renderItem = ({ item }: { item: Transaction }) => (
    <TransactionItem item={item} />
  )

  return (
    <FlatList
      style={styles.list}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />)
}

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
    marginRight: 10,
  },
})

export default TransactionList


