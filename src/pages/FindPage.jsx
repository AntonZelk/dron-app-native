import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Back } from '../components/Back';

import { CustomText } from '../UI/CustomText';

export const FindPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Back navigation={navigation} />
      <View style={styles.wrapper}>
        <CustomText style={styles.text}>Find Page</CustomText>
      </View>
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
