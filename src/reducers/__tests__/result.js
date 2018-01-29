import { reducerTest } from 'redux-jest';
import * as actions from '../../actions/lyrics';
import { initialState, result } from '../result';

describe('Result reducer', () => {
  const lyrics = 'Lyrics';
  const artist = 'Artist';
  const title = 'Title';
  const error = 'Error';
  
  reducerTest(
    'should handle lyricsGet',
    result,
    {
      ...initialState
    },
    actions.lyricsGet({
      artist,
      title
    }),
    {
      ...initialState,
      fetching: true
    }
  );

  reducerTest(
    'should handle lyricsGetSuccess',
    result,
    {
      ...initialState,
      fetching: true,
    },
    actions.lyricsGetSuccess({ lyrics }),
    {
      ...initialState,
      fetching: false,    
      lyrics,
    }
  );

  reducerTest(
    'should handle lyricsGetFailed',
    result,
    {
      ...initialState
    },
    actions.lyricsGetFailed(error),
    {
      ...initialState,
      fetching: false,
      error
    }
  );

  reducerTest(
    'should handle lyricsSuggestionsFailed',
    result,
    {
      ...initialState
    },
    actions.lyricsSuggestionsFailed(error),
    {
      ...initialState,
      fetching: false,
      error
    }
  );

});
