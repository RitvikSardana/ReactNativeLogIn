import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',

    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
  },
  container_PRIMARY: {
    backgroundColor: '#1E48F6',
  },
  container_SECONDARY:{
    borderColor:'#1E48F6',
    borderWidth:1
  },
  container_TERTIARY: {},
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  text_SECONDARY: {
    color: 'black',
  },
  text_TERTIARY: {
    color: 'gray',
  },
});
