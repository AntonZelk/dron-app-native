import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { CustomText } from '../UI/CustomText';

export const Preview = () => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>Need for Speed</CustomText>
      <CustomText style={styles.name}>UdoDron 3 Pro</CustomText>
      <CustomText style={styles.price}>1984 $</CustomText>
      <Image source={require('../../assets/preview.png')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'rgba(49, 122, 232, 1)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 1,
    borderRadius: 20,
    elevation: 5,
    paddingLeft: 20,
    paddingBottom: 20,
    marginTop: 32,
    maxHeight: 164,
  },
  text: {
    fontFamily: 'Lato-Bold',
    lineHeight: 17,
    fontSize: 14,
    color: '#fff',
    marginTop: 71,
    zIndex: 99,
  },
  name: {
    fontFamily: 'Lato-Bold',
    lineHeight: 32,
    fontSize: 24,
    color: '#fff',
    zIndex: 99,
  },
  price: {
    fontFamily: 'Lato-Bold',
    lineHeight: 24,
    fontSize: 20,
    color: '#fff',
    zIndex: 99,
  },
  img: {
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 1,
    width: 233,
    height: 164,
  },
});
