import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Footer } from '../components/Footer';
import { CustomText } from '../UI/CustomText';

export const FindPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <CustomText style={styles.text}>Find Page</CustomText>
      </View>

      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
