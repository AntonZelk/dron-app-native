import {
  REQUEST_DRONS,
  FETCH_DRONS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  ADD_PREVIEW,
  CHANGE_DRONS,
  SET_CURRENT_DRON,
} from './types';

export const requestDrons = () => {
  return {
    type: REQUEST_DRONS,
  };
};

export const fetchDrons = (arr) => {
  const payload = arr.filter((dron) => !dron.preview);
  return {
    type: FETCH_DRONS,
    payload,
  };
};

export const addPreview = (arr) => {
  let previewObj = {};
  arr.forEach((dron) => {
    if (dron.preview) {
      previewObj = dron;
    }
  });
  return {
    type: ADD_PREVIEW,
    payload: previewObj,
  };
};

export const changeDrons = (payload, name) => {
  let selectedDrons = {};

  if (name === 'All' || name === undefined) {
    selectedDrons = {
      drons: payload,
      selectedBtn: 'All',
    };
  }
  if (name === 'Cheap') {
    selectedDrons = {
      drons: [
        payload.reduce((prev, curr) => (prev.price < curr.price ? prev : curr)),
      ],
      selectedBtn: name,
    };
  }
  if (name === 'Best') {
    selectedDrons = {
      drons: payload.filter((dron) => dron.rating > 4),
      selectedBtn: name,
    };
  }
  if (name === 'Fast') {
    selectedDrons = {
      drons: [
        payload.reduce((prev, curr) => (prev.speed > curr.speed ? prev : curr)),
      ],
      selectedBtn: name,
    };
  }
  return {
    type: CHANGE_DRONS,
    payload: selectedDrons,
  };
};

export const setCurrentDron = (dron) => {
  return {
    type: SET_CURRENT_DRON,
    payload: dron,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const showError = () => {
  return {
    type: SHOW_ERROR,
  };
};
