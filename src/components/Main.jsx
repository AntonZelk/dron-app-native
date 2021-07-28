import React from 'react';
import { View, StyleSheet } from 'react-native';

import { BtnBar } from '../components/BtnBar';
import { Preview } from '../components/Preview';
import { CustomText } from '../UI/CustomText';
import { DronCards } from './DronCards';

export const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Preview />
      <BtnBar />
      <CustomText style={styles.text}>All Quadcopters</CustomText>
      <DronCards navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'Lato-Bold',
    lineHeight: 24,
    fontSize: 20,
    color: 'rgba(31, 31, 31, 1)',
    marginTop: 28,
  },
});
