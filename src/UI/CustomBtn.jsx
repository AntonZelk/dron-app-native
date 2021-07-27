import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { changeDrons } from '../actions/dronsActions';

import { CustomText } from './CustomText';

export const CustomBtn = ({ name }) => {
  const dispatch = useDispatch();

  const drons = useSelector((state) => state.drons.drons);

  const selectedBtn = useSelector(
    (state) => state.drons.selectedDrons.selectedBtn
  );

  const onClickHandler = () => {
    dispatch(changeDrons(drons, name));
  };
  const customStyleBtn =
    selectedBtn === name
      ? { ...styles.btn, ...styles.activeBtn }
      : { ...styles.btn };

  const customStyleText =
    selectedBtn === name
      ? { ...styles.text, ...styles.activeText }
      : { ...styles.text };

  return (
    <TouchableOpacity style={customStyleBtn} onPress={onClickHandler}>
      <CustomText style={customStyleText}>{name}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 78,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(231, 231, 231, 1)',
    borderRadius: 12,
  },
  text: {
    lineHeight: 22,
    fontSize: 16,
    color: 'rgba(31, 31, 31, 1)',
  },
  activeBtn: {
    backgroundColor: 'rgba(49, 122, 232, 1)',
  },
  activeText: {
    color: '#fff',
  },
});
