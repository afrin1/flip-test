import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { ButtonProps } from ".";
import { colors } from "../../theme/colors";
import { buttonText } from "../../theme/typography";

const SuccessButton = (props: ButtonProps) => {
  const { title, onPress } = props
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
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