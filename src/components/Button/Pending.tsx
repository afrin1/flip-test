import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";

const PendingButton = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity
      onPress={() => Alert.alert('Simple Button pressed')}
      style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: colors.PENDING,
    borderWidth: 2,
  },
  buttonText: {
    color: '#000000',
    ...buttonText as any
  },
})

export default PendingButton;