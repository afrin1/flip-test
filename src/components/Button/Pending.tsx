import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from ".";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";
import testID from "../../utils/testID";

const PendingButton = (props: ButtonProps) => {
  const { title, onPress } = props
  return (
    <TouchableOpacity
      {...props}
      {...testID('pending-button')}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center'
  },
  buttonText: {
    color: '#000000',
    padding: 10,
    margin: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderColor: colors.PENDING,
    borderWidth: 2,
    ...buttonText as any
  },
})

export default PendingButton;