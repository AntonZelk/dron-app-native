import React from 'react';
import { View, StyleSheet } from 'react-native';

import { CustomBtn } from '../UI/CustomBtn';

export const BtnBar = () => {
  return (
    <View style={styles.container}>
      <CustomBtn name="All" />
      <CustomBtn name="Cheap" />
      <CustomBtn name="Best" />
      <CustomBtn name="Fast" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 32,
  },
});
