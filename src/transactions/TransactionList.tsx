import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { Transaction } from './types'
import TransactionItem from './TransactionItem'

const TRANSACTIONS_API = 'https://nextar.flip.id/frontend-test'

const TransactionList = () => {
  const [data, setData] = useState<Transaction[]>([]);
  const renderItem = ({ item }: { item: Transaction }) => (
    <TransactionItem item={item} />
  )

  useEffect(() => {
    const getTransactions = async () => {
      const transactions: Transaction[] = await fetchTransactions()
      setData(transactions)
    }

    getTransactions()
  }, [])

  return (<FlatList
    style={styles.list}
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />)
}

const fetchTransactions = async (): Promise<Transaction[]> => {
  var list: Transaction[] = []
  await axios.get(TRANSACTIONS_API)
    .then((response) => {
      list = getTransactionListFromResponse(response.data)
    })
    .catch((error) => {
      console.error(`Fetch failed: ${error}`)
      return []
    })
  return list
}

const getTransactionListFromResponse = (transactions: any): Transaction[] => {
  const list: Transaction[] = []

  Object.keys(transactions).map((item: any) => {
    const perTransaction = transactions[item]
    const transaction: Transaction = {
      id: perTransaction.id,
      amount: perTransaction.amount,
      uniqueCode: perTransaction.unique_code,
      status: perTransaction.status,
      senderBank: perTransaction.sender_bank,
      accountNumber: perTransaction.account_number,
      beneficiaryName: perTransaction.beneficiary_name,
      beneficiaryBank: perTransaction.beneficiary_bank,
      remark: perTransaction.remark,
      createdAt: perTransaction.created_at,
      completedAt: perTransaction.completed_at,
    }
    list.push(transaction)
  })

  return list
}



const styles = StyleSheet.create({
  list: {
    marginLeft: 10,
    marginRight: 10,
  },
})

export default TransactionList


