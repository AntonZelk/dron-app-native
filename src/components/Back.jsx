import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { CustomText } from '../UI/CustomText';
import BackImg from '../../assets/back1.svg';

export const Back = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
      <BackImg />
      <CustomText style={styles.text}>Go back</CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 30,
  },
  text: {
    fontFamily: 'Lato-Bold',
    marginLeft: 8,
    fontSize: 16,
  },
});
