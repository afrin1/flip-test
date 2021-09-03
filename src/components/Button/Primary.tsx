import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from ".";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";

const PrimaryButton = (props: ButtonProps) => {
  const { title, onPress} = props
  return (
    <TouchableOpacity
      onPress={onPress}
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