import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomText } from '../UI/CustomText';

const Error = () => (
  <View style={[styles.container]}>
    <CustomText style={styles.text}>Sorry... Something went wrong</CustomText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Error;
