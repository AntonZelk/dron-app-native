import { call, put, takeEvery, select } from 'redux-saga/effects';

import {
  hideLoader,
  showLoader,
  showError,
  fetchDrons,
  changeDrons,
  addPreview,
} from '../actions/dronsActions';
import { REQUEST_DRONS } from '../actions/types';
import axiosDB from '../axios/axiosDB';

const fetchDronsDB = async () => {
  return await axiosDB.get('/Drons.json');
};

function* sagaDronsWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchDronsDB);
    yield put(fetchDrons(payload.data));
    const drons = yield select((state) => state.drons.drons);
    yield put(changeDrons(drons));
    yield put(addPreview(payload.data));
    yield put(hideLoader());
  } catch (e) {
    yield put(showError());
    yield put(hideLoader());
  }
}

export function* sagaDronsWatcher() {
  yield takeEvery(REQUEST_DRONS, sagaDronsWorker);
}
