import * as actions from '../constants/actions';

export const initialState = {
  lyrics: null,
  fetching: false,
  error: null,
};

const lyricsGet = (state, { payload }) => (
  {
    ...state,
    fetching: true,
  }
);

const lyricsGetSuccess = (state, { payload }) => (
  {
    ...state,
    fetching: false,    
    lyrics: payload.lyrics,
  }
);

const lyricsGetFailed = (state, { payload }) => (
  {
    ...state,
    fetching: false,
    error: payload,
  }
);

const lyricsSuggestFailed = (state, { payload }) => (
  {
    ...state,
    error: payload,
  }
);

export const result = (state = initialState, action) => {
  switch (action.type) {
  case actions.LYRICS_GET:
    return lyricsGet(state, action);
  case actions.LYRICS_GET_SUCCESS:
    return lyricsGetSuccess(state, action);
  
  case actions.LYRICS_GET_FAILED:
    return lyricsGetFailed(state, action);
  case actions.LYRICS_SUGGEST_FAILED:
    return lyricsSuggestFailed(state, action);
  
  default:
    return state;
  }
};

export default result;
