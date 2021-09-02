import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";

const SuccessButton = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Simple Button pressed')}
      style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.SUCCESS,
    borderRadius: 10,
    padding: 10
  },
  text: {
    color: '#FFFFFF',
    ...buttonText as any
  },
})

export default SuccessButton;