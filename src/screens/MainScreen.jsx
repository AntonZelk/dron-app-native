import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { requestDrons } from '../actions/dronsActions';

import { HomePage } from '../pages/HomePage';
import { FavPage } from '../pages/FavPage';
import { FindPage } from '../pages/FindPage';
import { CartPage } from '../pages/CartPage';

import {
  HomeImg,
  HomeImgActive,
  FavImg,
  FavImgActive,
  FindImg,
  FindImgActive,
  CartImg,
  CartImgActive,
} from '../UI/SvgImages';

const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  const dispatch = useDispatch();

  const requestItemsHandler = useCallback(() => {
    dispatch(requestDrons());
  }, [dispatch]);

  useEffect(() => {
    requestItemsHandler();
  }, [requestItemsHandler]);

  return (
    <View style={styles.wrapper}>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            height: 96,

            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            alignItems: 'center',
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            shadowColor: 'black',
            shadowOpacity: 0.15,
            shadowOffset: { width: 2, height: 2 },
            shadowRadius: 16,
          },
          tabStyle: {
            width: 50,
            height: 50,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) =>
              focused ? <HomeImgActive /> : <HomeImg />,
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavPage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) =>
              focused ? <FavImgActive /> : <FavImg />,
          }}
        />
        <Tab.Screen
          name="Find"
          component={FindPage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) =>
              focused ? <FindImgActive /> : <FindImg />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartPage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) =>
              focused ? <CartImgActive /> : <CartImg />,
          }}
        />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
