import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Link, useHistory } from 'react-router-native';

import Home from '../../assets/home.svg';
import HomeActive from '../../assets/homeActive.svg';
import Fav from '../../assets/fav.svg';
import FavActive from '../../assets/favActive.svg';
import Find from '../../assets/find.svg';
import FindActive from '../../assets/findActive.svg';
import Cart from '../../assets/cart.svg';
import CartActive from '../../assets/cartActive.svg';

export const Footer = () => {
  const history = useHistory();

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Link to="/" component={TouchableOpacity}>
          {history.location.pathname === '/' ? <HomeActive /> : <Home />}
        </Link>
        <Link to="/favourite" component={TouchableOpacity}>
          {history.location.pathname === '/favourite' ? <FavActive /> : <Fav />}
        </Link>
        <Link to="/find" component={TouchableOpacity}>
          {history.location.pathname === '/find' ? <FindActive /> : <Find />}
        </Link>
        <Link to="/cart" component={TouchableOpacity}>
          {history.location.pathname === '/cart' ? <CartActive /> : <Cart />}
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(248, 248, 248, 1)',
  },
  container: {
    width: '100%',
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
    elevation: 5,
    bottom: 0,
  },
});
