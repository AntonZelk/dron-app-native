import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const CustomText = (props) => {
  const customFonts = {
    'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
  };

  const [isLoaded] = useFonts(customFonts);
  const { children, style } = props;

  const customStyle = { ...styles.text, ...style };

  if (!isLoaded) {
    return null;
  }

  return <Text style={customStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Lato-Regular',
    color: '#1F1F1F',
  },
});
