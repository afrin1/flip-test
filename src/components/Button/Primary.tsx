import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";

const PrimaryButton = ({ title }: { title: string }) => {
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
    padding: 8
  },
  buttonText: {
    color: colors.PENDING,
    ...buttonText as any
  },
})

export default PrimaryButton;