import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';

import { HomeImg, FavImg, FindImg, CartImg } from '../UI/SvgImages';

export const DrawerCnt = (props) => {
  return (
    <View style={styles.wrapper}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <DrawerItem
            labelStyle={styles.label}
            icon={() => <HomeImg />}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            labelStyle={styles.label}
            icon={() => <FavImg />}
            label="Favourite"
            onPress={() => {
              props.navigation.navigate('Favourite');
            }}
          />
          <DrawerItem
            labelStyle={styles.label}
            icon={() => <FindImg />}
            label="Find"
            onPress={() => {
              props.navigation.navigate('Find');
            }}
          />
          <DrawerItem
            labelStyle={styles.label}
            icon={() => <CartImg />}
            label="Cart"
            onPress={() => {
              props.navigation.navigate('Cart');
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1 },
  drawerContent: {
    flex: 1,
    paddingTop: 13,
  },

  label: {
    fontSize: 24,
  },
});
