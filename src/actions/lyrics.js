import { createAction } from 'redux-actions';
import * as actionsNames from '../constants/actions';

export const lyricsGet = createAction(actionsNames.LYRICS_GET);
export const lyricsGetSuccess = createAction(actionsNames.LYRICS_GET_SUCCESS);
export const lyricsGetFailed = createAction(actionsNames.LYRICS_GET_FAILED);

export const lyricsSuggestions = createAction(actionsNames.LYRICS_SUGGEST);
export const lyricsSuggestionsSuccess = createAction(actionsNames.LYRICS_SUGGEST_SUCCESS);
export const lyricsSuggestionsFailed = createAction(actionsNames.LYRICS_SUGGEST_FAILED);
