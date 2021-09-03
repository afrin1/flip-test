import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from ".";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";

const SuccessButton = (props: ButtonProps) => {
  const { title, onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
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