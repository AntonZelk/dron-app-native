import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomText } from '../UI/CustomText';
import Menu from '../../assets/menu1.svg';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomText style={styles.text}>Quadrojoy</CustomText>
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Menu />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 32,
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'Lato-Black',
    lineHeight: 32,
    fontSize: 24,
  },
});
