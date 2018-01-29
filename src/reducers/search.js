import * as actions from '../constants/actions';

export const initialState = {
  song: {},
  suggestions: [],
};

const lyricsSuggestionsSuccess = (state, { payload }) => (
  {
    ...state,
    suggestions: payload
  }
);

const lyricsGetSuccess = (state, { payload }) => (
  {
    ...state,
    song: {
      artist: payload.artist,
      title: payload.title,
    },
    suggestions: [],
  }
);

export const search = (state = initialState, action) => {
  switch (action.type) {

  case actions.LYRICS_SUGGEST_SUCCESS:
    return lyricsSuggestionsSuccess(state, action);
  
  case actions.LYRICS_GET_SUCCESS:
    return lyricsGetSuccess(state, action);

  default:
    return state;
  }
};

export default search;
