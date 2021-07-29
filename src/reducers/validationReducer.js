import {
  SET_NAME_TEXT,
  SET_PHONE_NUMBER,
  CLEAR_VALIDATION,
  CHECK_VALIDATION,
} from '../actions/types';

const initialState = {
  isValidated: false,
  name: {
    text: '',
    isName: false,
    showLabel: false,
  },
  phone: {
    number: '',
    isPhone: false,
    showLabel: false,
  },
};

export const validationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME_TEXT:
      return { ...state, name: action.payload };
    case SET_PHONE_NUMBER:
      return { ...state, phone: action.payload };
    case CHECK_VALIDATION:
      return {
        isValidated: action.isValidated,
        name: action.name,
        phone: action.phone,
      };
    case CLEAR_VALIDATION:
      return {
        isValidated: false,
        name: {
          text: '',
          isName: false,
          showLabel: false,
        },
        phone: {
          number: '',
          isPhone: false,
          showLabel: false,
        },
      };
    default:
      return state;
  }
};
