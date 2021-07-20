import React from 'react';
import { useDispatch } from 'react-redux';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';

import { changeModal } from '../actions/dronsActions';

import { CustomText } from '../UI/CustomText';

export const ModalWindow = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <BlurView intensity={50} blurTint={'dark'} style={styles.blur}></BlurView>

      <View style={styles.back}></View>
      <View style={styles.modal}>
        <Image source={require('../../assets/modal.png')} style={styles.img} />
        <CustomText style={styles.text}>Ваш заказ принят</CustomText>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(changeModal(false))}
        >
          <CustomText style={styles.textBtn}>Ок</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  back: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: '#1F1F1F',
    opacity: 0.65,
  },

  modal: {
    backgroundColor: '#fff',
    width: '95%',
    alignItems: 'center',
    borderRadius: 16,
    zIndex: 9999,
  },
  img: {
    marginTop: 50,
  },
  text: {
    fontWeight: 'normal',
    lineHeight: 22,
    fontSize: 16,
    color: 'rgba(147, 147, 153, 1)',
    marginTop: 15,
  },
  btn: {
    width: 146,
    height: 46,
    backgroundColor: 'rgba(49, 122, 232, 1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  textBtn: {
    fontWeight: 'normal',
    lineHeight: 22,
    fontSize: 16,
    color: '#fff',
  },
});
