import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NativeRouter, Route } from 'react-router-native';
import { StyleSheet, View } from 'react-native';

import { requestDrons } from '../actions/dronsActions';

import { HomePage } from '../pages/HomePage';
import { FavPage } from '../pages/FavPage';
import { FindPage } from '../pages/FindPage';
import { CartPage } from '../pages/CartPage';
import { CardDetailPage } from '../pages/CardDetailPage';

export const Content = () => {
  const dispatch = useDispatch();

  const requestItemsHandler = useCallback(() => {
    dispatch(requestDrons());
  }, [dispatch]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);

  return (
    <View style={styles.wrapper}>
      <NativeRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/favourite" component={FavPage} />
        <Route path="/find" component={FindPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/dron/:id" component={CardDetailPage} />
      </NativeRouter>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
});
