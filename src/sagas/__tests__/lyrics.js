import { testSaga } from 'redux-saga-test-plan';
import * as actions from '../../constants/actions';
import * as service from '../../services/lyrics';
import {
  fetchLyrics,
  fetchSuggestions,
} from './../lyrics';

describe('Lyrics sagas', () => {

  it('fetchLyrics', () => {
    const artist = 'Artist';
    const title = 'Title';
    const lyrics = 'Lyrics';

    const saga = testSaga(fetchLyrics, {
      type: actions.LYRICS_GET, 
      payload: {
        artist,
        title,
      }
    });

    saga
      .next()
      .call(service.get, {
        artist,
        title,
      })
      .next({
        artist,
        title,
        lyrics,
      })
      .put({
        type: actions.LYRICS_GET_SUCCESS,
        payload: {
          lyrics,
          artist,
          title,
        }
      })
      .next()
      .isDone();
  });

  it('fetchLyrics error handling', () => {
    const error = 'Fake';
    const action = { type: actions.LYRICS_GET };
    const saga = testSaga(fetchLyrics, action);

    saga
      .next()
      .throw(new Error(error))
      .put({
        type: actions.LYRICS_GET_FAILED,
        payload: `Error: ${error}`,
      })
      .next()
      .isDone();
  });
  
  it('fetchSuggestions', () => {
    const query = 'Query';
    const suggestions = [];

    const saga = testSaga(fetchSuggestions, {
      type: actions.LYRICS_SUGGEST, 
      payload: query,
    });

    saga
      .next()
      .call(service.suggest, query)
      .next({
        suggestions,
      })
      .put({
        type: actions.LYRICS_SUGGEST_SUCCESS,
        payload: {
          suggestions,
        }
      })
      .next()
      .isDone();
  });

  it('fetchSuggestions error handling', () => {
    const error = 'Fake';
    const action = { type: actions.LYRICS_SUGGEST };
    const saga = testSaga(fetchSuggestions, action);

    saga
      .next()
      .throw(new Error(error))
      .put({
        type: actions.LYRICS_SUGGEST_FAILED,
        payload: `Error: ${error}`,
      })
      .next()
      .isDone();
  });
  
});
