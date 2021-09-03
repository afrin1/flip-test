import React from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { PrimaryButton } from "../components/Button"
import { colors } from "../theme"

interface SearchBarProps {
  onTextChanged: any,
  onButtonPressed: any,
  text: string
}

const SearchBar = (props: SearchBarProps) => {
  const { onTextChanged, onButtonPressed, text } = props

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Cari nama, bank, atau nominal"
        placeholderTextColor={colors.GRAY}
        style={styles.search}
        onChangeText={onTextChanged}
        value={text}
        inlineImageLeft="search"
      />
      <PrimaryButton title={'URUTKAN V'} onPress={onButtonPressed} />
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

export default SearchBar