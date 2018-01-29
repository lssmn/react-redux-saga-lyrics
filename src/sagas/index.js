import { all, takeLatest } from 'redux-saga/effects';
import { fetchLyrics, fetchSuggestions } from './lyrics';
import * as actions from '../constants/actions';

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LYRICS_GET, fetchLyrics),
    takeLatest(actions.LYRICS_SUGGEST, fetchSuggestions)
  ]);
}
