import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-native';
import { TextInputMask } from 'react-native-masked-text';

import { changeModal, setCurrentDron } from '../actions/dronsActions';

import Images from '../UI/Imajes';
import { CustomText } from '../UI/CustomText';
import { ModalWindow } from '../components/ModalWindow';

export const CardDetailPage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const [maskedValue, setMaskedValue] = useState('');

  const drons = useSelector((state) => state.drons.drons);
  const currentDron = useSelector((state) => state.drons.currentDron);
  const openModal = useSelector((state) => state.drons.openModal);

  const setCurrentItemHandler = useCallback(() => {
    dispatch(setCurrentDron(drons, params.id));
  }, [dispatch, params, drons]);

  useEffect(() => {
    setCurrentItemHandler();
  }, [setCurrentItemHandler]);

  return (
    <View style={styles.wrapper}>
      {openModal ? <ModalWindow /> : null}
      <ScrollView style={styles.container}>
        <Link to={`/`} component={TouchableOpacity}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.back}
          />
        </Link>
        <View style={styles.img}>
          <Image source={Images.dronsDetail[currentDron.id - 1]} />
        </View>
        <CustomText style={styles.text}>Ordinary quadcopter</CustomText>
        <CustomText style={styles.name}>{currentDron.name}</CustomText>
        <CustomText style={styles.price}>{currentDron.price} $</CustomText>
        <CustomText style={styles.about}>{currentDron.text}</CustomText>
        <TextInput
          placeholder="Имя"
          maxLength={20}
          style={styles.inputName}
          placeholderTextColor={'rgba(147, 147, 153, 1)'}
        />
        <TextInputMask
          type={'cel-phone'}
          options={{
            prefix: '+375',
            maskType: 'BRL',
            withDDD: true,
            dddMask: '+375 (99)999-99-99 ',
          }}
          value={maskedValue}
          placeholder={'+375 (__)___-__-__'}
          style={styles.inputNum}
          onChangeText={(text) => {
            setMaskedValue(text);
          }}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => dispatch(changeModal(true))}
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
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    zIndex: 1,
  },
  back: {
    marginTop: 70,
    marginLeft: 17,
  },
  img: {
    alignItems: 'center',
    marginTop: 18,
  },
  text: {
    fontWeight: 'normal',
    lineHeight: 22,
    fontSize: 16,
    color: 'rgba(31, 31, 31, 1)',
    marginTop: 24,
  },
  name: {
    fontWeight: 'bold',
    lineHeight: 36,
    fontSize: 28,
    color: 'rgba(31, 31, 31, 1)',
  },
  price: {
    fontWeight: 'bold',
    lineHeight: 24,
    fontSize: 20,
    color: 'rgba(49, 122, 232, 1)',
    marginTop: 8,
  },
  about: {
    fontWeight: 'normal',
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
  },
  inputNum: {
    marginTop: 24,
    fontSize: 16,
    height: 30,
    borderBottomColor: 'rgba(231, 231, 231, 1)',
    borderBottomWidth: 1,
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
    fontWeight: 'normal',
    lineHeight: 22,
    fontSize: 16,
    color: '#fff',
  },
});
