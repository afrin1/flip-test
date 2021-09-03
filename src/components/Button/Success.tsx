import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from ".";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";
import testID from "../../utils/testID";

const SuccessButton = (props: ButtonProps) => {
  const { title, onPress } = props
  return (
    <TouchableOpacity
      {...testID('success-button')}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    backgroundColor: colors.SUCCESS,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    ...buttonText as any
  },
})

export default SuccessButton;