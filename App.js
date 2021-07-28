import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/store/store';

import { DrawerCnt } from './src/components/DrawerCnt';

import { MainScreen } from './src/screens/MainScreen';

import { CardDetailPage } from './src/pages/CardDetailPage';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.wrapper}>
        <NavigationContainer style={styles.wrapper}>
          <Drawer.Navigator drawerContent={(props) => <DrawerCnt {...props} />}>
            <Drawer.Screen name="HomeScr" component={MainScreen} />
            <Drawer.Screen name="Detail" component={CardDetailPage} />
          </Drawer.Navigator>
        </NavigationContainer>
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
