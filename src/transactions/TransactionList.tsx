import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Transaction } from './types'
import TransactionItem from './TransactionItem'

const TransactionList = ({data}: {data: Transaction[]}) => {
  const renderItem = ({ item }: { item: Transaction }) => (
    <TransactionItem item={item} />
  )

  return (<FlatList
    style={styles.list}
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />)
}

const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
    marginRight: 10,
  },
})

export default TransactionList


