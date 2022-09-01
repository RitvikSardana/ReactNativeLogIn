import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder,secureText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor = "#777"
        value={value}
        onChangeText={setValue}
        style={styles.input}
        secureTextEntry = {secureText}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 6,
    paddingHorizontal: 10,
    marginVertical: 5,
  },

});
