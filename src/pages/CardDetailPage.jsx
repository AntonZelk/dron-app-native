import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';

import Images from '../UI/Imajes';
import Back from '../../assets/back1.svg';

import { CustomText } from '../UI/CustomText';
import { ModalWindow } from '../components/ModalWindow';
import {
  checkValidation,
  clearValidation,
  setFhoneNumber,
  setNameText,
} from '../actions/validationActions';

export const CardDetailPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const currentDron = useSelector((state) => state.drons.currentDron);
  const validation = useSelector((state) => state.validation);

  return (
    <View style={styles.wrapper}>
      {validation.isValidated ? <ModalWindow /> : null}
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            dispatch(clearValidation(validation));
            navigation.goBack();
          }}
        >
          <Back />
        </TouchableOpacity>

        <View style={styles.img}>
          <Image
            source={Images.drons[currentDron.id - 1]}
            style={currentDron.id === 2 ? styles.imgDetail1 : styles.imgDetail}
          />
        </View>
        <CustomText style={styles.text}>Ordinary quadcopter</CustomText>
        <CustomText style={styles.name}>{currentDron.name}</CustomText>
        <CustomText style={styles.price}>{currentDron.price} $</CustomText>
        <CustomText style={styles.about}>{currentDron.text}</CustomText>
        <View>
          <TextInput
            placeholder="Имя"
            maxLength={20}
            style={styles.inputName}
            value={validation.name.text}
            placeholderTextColor={'rgba(147, 147, 153, 1)'}
            onChangeText={(text) => {
              dispatch(setNameText(validation.name, text));
            }}
          />
          {validation.name.showLabel ? (
            <CustomText style={styles.label}>Введите имя.</CustomText>
          ) : null}
        </View>
        <View>
          <TextInputMask
            type={'cel-phone'}
            options={{
              prefix: '+375',
              maskType: 'BRL',
              withDDD: true,
              dddMask: '+375 (99)999-99-99 ',
            }}
            maxLength={18}
            value={validation.phone.number}
            placeholder={'+375 (__)___-__-__'}
            style={styles.inputNum}
            onChangeText={(phoneNumber) => {
              dispatch(setFhoneNumber(validation.phone, phoneNumber));
            }}
          />
          {validation.phone.showLabel ? (
            <CustomText style={styles.label}>
              Введите корректный номер телефона.
            </CustomText>
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(checkValidation(validation));
          }}
        >
          <CustomText style={styles.textBtn}>Заказать</CustomText>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    zIndex: 1,
  },

  label: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    position: 'absolute',
    bottom: -20,
    color: 'rgba(245, 39, 39, 1)',
  },
  back: {
    marginTop: 70,
    marginLeft: 17,
  },
  img: {
    flex: 1,
    alignItems: 'center',
    marginTop: 18,
    width: 343,
    height: 281,
    alignSelf: 'center',
  },
  imgDetail: {
    width: '100%',
    height: '100%',
  },
  imgDetail1: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    lineHeight: 22,
    fontSize: 16,
    color: 'rgba(31, 31, 31, 1)',
    marginTop: 24,
  },
  name: {
    fontFamily: 'Lato-Black',
    lineHeight: 36,
    fontSize: 28,
    color: 'rgba(31, 31, 31, 1)',
  },
  price: {
    fontFamily: 'Lato-Bold',
    lineHeight: 24,
    fontSize: 20,
    color: 'rgba(49, 122, 232, 1)',
    marginTop: 8,
  },
  about: {
    lineHeight: 22,
    fontSize: 16,
    color: 'rgba(147, 147, 153, 1)',
    marginTop: 12,
  },
  inputName: {
    marginTop: 30,
    fontSize: 16,
    height: 30,
    borderBottomColor: 'rgba(231, 231, 231, 1)',
    borderBottomWidth: 1,
    fontFamily: 'Lato-Regular',
  },
  inputNum: {
    marginTop: 24,
    fontSize: 16,
    height: 30,
    borderBottomColor: 'rgba(231, 231, 231, 1)',
    borderBottomWidth: 1,
    fontFamily: 'Lato-Regular',
  },
  btn: {
    width: '100%',
    backgroundColor: 'rgba(49, 122, 232, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    height: 46,
    borderRadius: 8,
    marginTop: 28,
    marginBottom: 40,
  },

  textBtn: {
    lineHeight: 22,
    fontSize: 16,
    color: '#fff',
  },
});
