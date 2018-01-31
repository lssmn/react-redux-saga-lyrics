import { testSaga } from 'redux-saga-test-plan';
import * as actions from '../../constants/actions';
import * as service from '../../services/lyrics';
import {
  fetchLyrics,
  fetchSuggestions,
} from './../lyrics';

describe('Lyrics sagas', () => {

  describe('fetchLyrics', () => {

    it('successful steps', () => {
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

    it('failing steps', () => {
      const error = 'Fake';
      const err = new Error(error);
      const action = { type: actions.LYRICS_GET };
      const saga = testSaga(fetchLyrics, action);
  
      saga
        .next()
        .throw(err)
        .put({
          type: actions.LYRICS_GET_FAILED,
          payload: err.toString(),
        })
        .next()
        .isDone();
    });

  });
  
  describe('fetchSuggestions', () => {
    
    it('successful steps', () => {
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
  
    it('failing steps', () => {
      const error = 'Fake';
      const err = new Error(error);
      const action = { type: actions.LYRICS_SUGGEST };
      const saga = testSaga(fetchSuggestions, action);
  
      saga
        .next()
        .throw(err)
        .put({
          type: actions.LYRICS_SUGGEST_FAILED,
          payload: err.toString(),
        })
        .next()
        .isDone();
    });

  });
  
});
