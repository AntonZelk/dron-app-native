import React from 'react';
import { View } from 'react-native';

import Fav from '../../assets/fav.svg';
import FavActive from '../../assets/favActive.svg';
import Home from '../../assets/home.svg';
import HomeActive from '../../assets/homeActive.svg';
import Find from '../../assets/find.svg';
import FindActive from '../../assets/findActive.svg';
import Cart from '../../assets/cart.svg';
import CartActive from '../../assets/cartActive.svg';

export const FavImg = () => {
  return (
    <View>
      <Fav />
    </View>
  );
};
export const FavImgActive = () => {
  return (
    <View>
      <FavActive />
    </View>
  );
};
export const HomeImg = () => {
  return (
    <View>
      <Home />
    </View>
  );
};
export const HomeImgActive = () => {
  return (
    <View>
      <HomeActive />
    </View>
  );
};
export const FindImg = () => {
  return (
    <View>
      <Find />
    </View>
  );
};
export const FindImgActive = () => {
  return (
    <View>
      <FindActive />
    </View>
  );
};
export const CartImg = () => {
  return (
    <View>
      <Cart />
    </View>
  );
};
export const CartImgActive = () => {
  return (
    <View>
      <CartActive />
    </View>
  );
};
