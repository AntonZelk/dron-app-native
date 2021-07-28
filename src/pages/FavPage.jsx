import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Back } from '../components/Back';
import { Header } from '../components/Header';
import { CustomText } from '../UI/CustomText';

export const FavPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Header />
        <Back />
      </View>
      <View style={styles.wrapper}>
        <CustomText style={styles.text}>Favourite Page</CustomText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    zIndex: 999,
  },
  wrapper: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontFamily: 'Lato-Black',
    fontSize: 42,
  },
});
