import {
  SET_NAME_TEXT,
  SET_PHONE_NUMBER,
  CHECK_VALIDATION,
  CLEAR_VALIDATION,
} from './types';

export const setNameText = (obj, text) => {
  obj.text = text;
  if (obj.text.length > 0) {
    obj.isName = true;
  } else {
    obj.isName = false;
  }
  obj.showLabel = false;
  return {
    type: SET_NAME_TEXT,
    payload: obj,
  };
};

export const setFhoneNumber = (obj, fhoneNumber) => {
  obj.number = fhoneNumber;
  obj.showLabel = false;
  if (obj.number.length === 18) {
    obj.isPhone = true;
  } else {
    obj.isPhone = false;
  }

  return {
    type: SET_PHONE_NUMBER,
    payload: obj,
  };
};

export const checkValidation = (validation) => {
  if (!validation.name.isName) {
    validation.name.showLabel = true;
  }
  if (!validation.phone.isPhone) {
    validation.phone.showLabel = true;
  }
  if (validation.phone.isPhone && validation.name.isName) {
    validation.isValidated = true;
  }

  return {
    type: CHECK_VALIDATION,
    name: validation.name,
    phone: validation.phone,
    isValidated: validation.isValidated,
  };
};

export const clearValidation = () => {
  return {
    type: CLEAR_VALIDATION,
  };
};
