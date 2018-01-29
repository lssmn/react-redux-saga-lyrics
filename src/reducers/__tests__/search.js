import { reducerTest } from 'redux-jest';
import * as actions from '../../actions/lyrics';
import { initialState, search } from '../search';

describe('Search reducer', () => {
  const artist = 'Artist';
  const title = 'Title';
  const song = { artist, title };
  
  reducerTest(
    'should handle lyricsSuggestionsSuccess',
    search,
    {
      ...initialState
    },
    actions.lyricsSuggestionsSuccess([ song ]),
    {
      ...initialState,
      suggestions: [ song ]
    }
  );

  reducerTest(
    'should handle lyricsGetSuccess',
    search,
    {
      ...initialState,
    },
    actions.lyricsGetSuccess({ artist, title }),
    {
      ...initialState,
      song,
      suggestions: [],
    }
  );

});
