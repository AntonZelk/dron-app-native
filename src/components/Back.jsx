import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from '../UI/CustomText';
import BackImg from '../../assets/back1.svg';

export const Back = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
      <BackImg />
      <CustomText style={styles.text}>Go back</CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    height: 50,

    alignItems: 'center',
    marginTop: 10,
    marginLeft: 30,
  },
  text: {
    fontFamily: 'Lato-Bold',
    marginLeft: 8,
    fontSize: 16,
  },
});
