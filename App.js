import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { store } from './src/store/store';

import { Content } from './src/components/Content';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.wrapper}>
        <Content />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
});
