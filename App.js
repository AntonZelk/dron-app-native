import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { store } from './src/store/store';

import { HomePage } from './src/pages/HomePage';
import { FavPage } from './src/pages/FavPage';
import { FindPage } from './src/pages/FindPage';
import { CartPage } from './src/pages/CartPage';
import { CardDetailPage } from './src/pages/CardDetailPage';

export default function App() {
  return (
    <NativeRouter>
      <Provider store={store}>
        <View style={styles.wrapper}>
          <Route exact path="/" component={HomePage} />
          <Route path="/favourite" component={FavPage} />
          <Route path="/find" component={FindPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/dron/:id" component={CardDetailPage} />
        </View>
      </Provider>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
});
