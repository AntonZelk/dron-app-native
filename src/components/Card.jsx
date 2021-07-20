import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import { CustomText } from '../UI/CustomText';
import Images from '../UI/Imajes';

export const Card = ({ dron }) => {
  return (
    <View style={styles.container}>
      <Image source={Images.drons[dron.id - 1]} />
      <View style={styles.textBlock}>
        <CustomText style={styles.name}>{dron.name}</CustomText>
        <View style={styles.textInfo}>
          <CustomText style={styles.text2}>{dron.price} $</CustomText>
          <View style={styles.ratingBlock}>
            <Image source={Images.star} style={styles.star}></Image>
            <CustomText style={styles.text2}>{dron.rating}</CustomText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    width: 204,
    height: 260,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    borderRadius: 12,
    marginHorizontal: 8,
  },
  textBlock: {
    paddingHorizontal: 16,
  },
  name: {
    fontWeight: 'bold',
    lineHeight: 22,
    fontSize: 16,
    color: 'rgba(31, 31, 31, 1)',
    marginTop: 12,
  },
  text2: {
    fontWeight: 'bold',
    lineHeight: 17,
    fontSize: 14,
    color: 'rgba(31, 31, 31, 1)',
  },
  textInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  ratingBlock: {
    flexDirection: 'row',
  },
  star: {
    marginRight: 5,
  },
});
