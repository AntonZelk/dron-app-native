import React, { useCallback, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { requestDrons } from '../actions/dronsActions';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Main } from '../components/Main';

export const HomePage = () => {
  const dispatch = useDispatch();

  const requestItemsHandler = useCallback(() => {
    dispatch(requestDrons());
  }, [dispatch]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);

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
