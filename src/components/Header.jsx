import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { CustomText } from '../UI/CustomText';

export const Header = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>Quadrojoy</CustomText>
      <Image source={require('../../assets/menu.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 32,
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: '800',
    lineHeight: 32,
    fontSize: 24,
  },
});
