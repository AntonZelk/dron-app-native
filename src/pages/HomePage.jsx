import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const HomePage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        <Header navigation={navigation} />
        <Main navigation={navigation} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
