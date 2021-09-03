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
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.PENDING,
    margin: 10,
    ...buttonText as any
  },
})

export default PrimaryButton;