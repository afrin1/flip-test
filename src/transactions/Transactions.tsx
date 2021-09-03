import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { PrimaryButton } from '../components/Button'
import { getDate as getDate_DD_MONTH_YYYY, isMatchingSearchText, sortA_Z, sortDateNewest, sortDateOldest, sortZ_A } from '../utils'
import SortMenu from './SortMenu'
import TransactionList from './TransactionList'
import { Transaction } from './types'

const TRANSACTIONS_API = 'https://nextar.flip.id/frontend-test'

const Transactions = () => {
  const [searchText, onSearchTextChanged] = useState<string>('')
  const [data, setData] = useState<Transaction[]>([]);
  const [fullData, setFullData] = useState<Transaction[]>([])
  const [isSortMenuOpened, setIsSortMenuOpened] = useState(false);
  const [sortOption, setSortOption] = useState<string>('URUTKAN');

  useEffect(() => {
    const getTransactions = async () => {
      const transactions: Transaction[] = await fetchTransactions()
      setData(transactions)
      setFullData(transactions)
    }
    getTransactions()
  }, [])

  const onSearch = (text: string) => {
    const searchText: string = text.toLowerCase()
    onSearchTextChanged(text)
    if (searchText.length > 1) {
      const newList = fullData.filter(
        (item: Transaction) => isMatchingSearchText(item, searchText)
      )
      setData(newList)
    } else if (searchText.length == 0) {
      setData(fullData)
    }
  }

  const sortList = () => {
    switch (sortOption) {
      case 'URUTKAN':
        setData(fullData)
        break;
      case 'Nama A-Z':
        setData(sortA_Z(fullData))
        break;
      case 'Nama Z-A':
        setData(sortZ_A(fullData))
        break;
      case 'Tanggal Terbaru':
        setData(sortDateNewest(fullData))
        break;
      case 'Tanggal Terlama':
        setData(sortDateOldest(fullData))
        break;
      default:
        setData(fullData)
        break;
    }
  }

  const onSortMenuOpen = () => {
    console.log('onSortMenuOpen')
    setIsSortMenuOpened(true)
  }

  const onSortMenuClose = () => {
    console.log('onSortMenuClose : ', sortOption)
    setIsSortMenuOpened(false)
    sortList()
  }

  return (
    <View>
      {isSortMenuOpened ?
        <SortMenu
          setMenuClose={onSortMenuClose}
          onOptionSelection={setSortOption}
          selectedOption={sortOption}
        />
        : null}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Cari nama, bank, atau nominal"
          placeholderTextColor="#C5C5C5"
          style={styles.search}
          onChangeText={onSearch}
          value={searchText}
          inlineImageLeft="search"
        />
        <PrimaryButton title={'URUTKAN V'} onPress={onSortMenuOpen} />
      </View>
      <TransactionList data={data} />
    </View>
  )
}

const fetchTransactions = async (): Promise<Transaction[]> => {
  var list: Transaction[] = []
  await axios.get(TRANSACTIONS_API)
    .then((response) => {
      list = getTransactionListFromResponse(response.data)
    })
    .catch((error) => {
      console.error(`Fetch failed: ${error}`)
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
      createdAt: getDate_DD_MONTH_YYYY(perTransaction.created_at),
      completedAt: perTransaction.completed_at,
    }
    list.push(transaction)
  })

  return list
}

const styles = StyleSheet.create({
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
  }
})
export default Transactions