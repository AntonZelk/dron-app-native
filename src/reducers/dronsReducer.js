import {
  ADD_PREVIEW,
  FETCH_DRONS,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
  CHANGE_DRONS,
  SET_CURRENT_DRON,
  CHANGE_MODAL,
} from '../actions/types';

const initialState = {
  drons: [],
  selectedDrons: {
    drons: [],
    selectedBtn: 'All',
  },
  preview: null,
  isLoading: false,
  isError: false,
  currentDron: {},
  openModal: false,
};

export const dronsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ERROR:
      return { ...state, isError: true };
    case FETCH_DRONS:
      return { ...state, drons: action.payload };
    case ADD_PREVIEW:
      return { ...state, preview: action.payload };
    case CHANGE_DRONS:
      return { ...state, selectedDrons: action.payload };
    case CHANGE_MODAL:
      return { ...state, openModal: action.payload };
    case SET_CURRENT_DRON:
      return { ...state, currentDron: action.payload };
    default:
      return state;
  }
};
