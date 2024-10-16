// SocialButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SocialButton = ({ onPress, title = 'Continue', buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4267B2', 
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SocialButton;
