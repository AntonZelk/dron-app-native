import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const HomePage = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <ScrollView>
        <Main />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
