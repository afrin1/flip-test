import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme';

export type RadioItem = {
  key: string,
  text: string
}
interface RadioButtonProps {
  items: RadioItem[],
  defaultValue: string,
  onSelection: any,
  [x: string]: any
}

const RadioButton = (props: RadioButtonProps) => {
  const { items, defaultValue, onSelection } = props
  const [value, setValue] = useState<string>(defaultValue)
  return (
    <View {...props}>
      {items.map(item => {
        return (
          <Pressable
            key={item.key} style={styles.container}
            onPress={() => {
              setValue(item.key)
              onSelection(item.key)
            }}>
            <View style={styles.radioContainer}>
              <View style={styles.radioCircle}>
                {value === item.key && <View style={styles.selectedRb} />}</View>
              <Text style={styles.radioText}>{item.text}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioText: {
    marginLeft: 20,
    fontSize: 20,
    color: '#000',
    fontWeight: '700'
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.PENDING,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: colors.PENDING,
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
})

export default RadioButton