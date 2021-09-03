import React, { useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { PrimaryButton } from '../components/Button'
import { colors } from '../theme'
import { isMatchingSearchText, sortA_Z, sortDateNewest, sortDateOldest, sortZ_A } from '../utils'
import { fetchTransactions } from './repository'
import SortMenu, { sortOptions } from './SortMenu'
import TransactionList from './TransactionList'
import { Transaction } from './types'

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
      case sortOptions.URUTKAN:
        setData(fullData)
        break;
      case sortOptions.Nama_A_Z:
        setData(sortA_Z(fullData))
        break;
      case sortOptions.Nama_Z_A:
        setData(sortZ_A(fullData))
        break;
      case sortOptions.Tanggal_Terbaru:
        setData(sortDateNewest(fullData))
        break;
      case sortOptions.Tanggal_Terlama:
        setData(sortDateOldest(fullData))
        break;
      default:
        setData(fullData)
        break;
    }
  }

  const onSortMenuOpen = () => {
    setIsSortMenuOpened(true)
  }

  const onSortMenuClose = () => {
    setIsSortMenuOpened(false)
    sortList()
  }

  return (
    <View style={{flex: 1}}>
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
          placeholderTextColor={colors.GRAY}
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