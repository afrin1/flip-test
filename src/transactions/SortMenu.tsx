import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { RadioButton } from '../components/Button';
import { RadioItem } from '../components/Button/Radio';

interface SortMenuProps {
  setMenuClose: any,
  onOptionSelection: any,
  selectedOption: string
}

const menuItems: RadioItem[] = [
  {
    key: 'URUTKAN',
    text: 'URUTKAN'
  },
  {
    key: 'Nama A-Z',
    text: 'Nama A-Z'
  },
  {
    key: 'Nama Z-A',
    text: 'Nama Z-A'
  },
  {
    key: 'Tanggal Terbaru',
    text: 'Tanggal Terbaru'
  },
  {
    key: 'Tanggal Terlama',
    text: 'Tanggal Terlama'
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