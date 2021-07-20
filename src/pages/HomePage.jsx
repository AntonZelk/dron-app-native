import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const HomePage = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header />
        <Main />
      </ScrollView>
      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
