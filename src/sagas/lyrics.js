import { call, put } from 'redux-saga/effects';
import * as actions from '../constants/actions';
import service from '../services/lyrics';

export function* fetchLyrics({ payload }) {
  try {
    const lyrics = yield call(service.get, payload);

    yield put({
      type: actions.LYRICS_GET_SUCCESS,
      payload: lyrics
    });
    
  } catch (err) {
    yield put({
      type: actions.LYRICS_GET_FAILED,
      payload: err.toString()
    });
  }
}

export function* fetchSuggestions({ payload }) {
  try {
    const suggestions = yield call(service.suggest, payload);
    
    yield put({
      type: actions.LYRICS_SUGGEST_SUCCESS,
      payload: suggestions
    });
    
  } catch (err) {
    yield put({
      type: actions.LYRICS_SUGGEST_FAILED,
      payload: err.toString()
    });
  }
}

export default {
  fetchLyrics,
  fetchSuggestions,
};
