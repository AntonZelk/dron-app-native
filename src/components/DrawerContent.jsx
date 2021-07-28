import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { HomeImg, FavImg, FindImg, CartImg } from '../UI/SvgImages';

export const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
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
  drawerContent: {
    flex: 1,
    marginTop: 15,
  },

  label: {
    fontSize: 24,
  },
});
