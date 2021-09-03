import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import { RadioButton } from '../components/Button';
import { RadioItem } from '../components/Button/Radio';
import testID from '../utils/testID';

interface SortMenuProps {
  setMenuClose: any,
  onOptionSelection: any,
  selectedOption: string
}

export enum sortOptions {
  URUTKAN = 'URUTKAN',
  Nama_A_Z = 'Nama A-Z',
  Nama_Z_A = 'Nama Z-A',
  Tanggal_Terbaru = 'Tanggal Terbaru',
  Tanggal_Terlama = 'Tanggal Terlama'
}

const menuItems: RadioItem[] = [
  {
    key: sortOptions.URUTKAN,
    text: sortOptions.URUTKAN
  },
  {
    key: sortOptions.Nama_A_Z,
    text: sortOptions.Nama_A_Z
  },
  {
    key: sortOptions.Nama_Z_A,
    text: sortOptions.Nama_Z_A
  },
  {
    key: sortOptions.Tanggal_Terbaru,
    text: sortOptions.Tanggal_Terbaru
  },
  {
    key: sortOptions.Tanggal_Terlama,
    text: sortOptions.Tanggal_Terlama
  },
]

const SortMenu = (props: SortMenuProps) => {
  const { setMenuClose, onOptionSelection, selectedOption } = props
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const onClose = () => {
    setIsOpen(false)
    setMenuClose()
  }

  useEffect(() => {
    setIsOpen(true)
  }, [])
  return (
    <Modal
      animationType="slide"
      visible={isOpen}
      transparent={true}
      onRequestClose={onClose}
    >
      <Pressable
        style={styles.container}
        onPress={onClose}>
        <View style={styles.centeredView}>
          <RadioButton
            {...testID('sort-radio-buttons')}
            items={menuItems}
            defaultValue={selectedOption}
            onSelection={onOptionSelection} />
        </View>
      </Pressable>
    </Modal>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  centeredView: {
    justifyContent: "center",
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    opacity: 1,
    flexGrow: 1,
    margin: 20
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
export default SortMenu