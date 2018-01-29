import * as actions from '../lyrics';

describe('lyrics actions', () => {

  it('lyricsGet', () => {
    expect(actions.lyricsGet({
      artist: 'Artist',
      title: 'Title',
    })).toMatchSnapshot();
  });

  it('lyricsGetSuccess', () => {
    expect(actions.lyricsGetSuccess({
      song: {
        lyrics: 'Lyrics',
        artist: 'Artist',
        title: 'Title',
      }
    })).toMatchSnapshot();
  });

  it('lyricsGetFailed', () => {
    expect(actions.lyricsGetFailed({
      error: 'Error'
    })).toMatchSnapshot();
  });

  it('lyricsSuggestions', () => {
    expect(actions.lyricsSuggestions('test')).toMatchSnapshot();
  });

  it('lyricsSuggestionsSuccess', () => {
    expect(actions.lyricsSuggestionsSuccess({
      suggestions: []
    })).toMatchSnapshot();
  });

  it('lyricsSuggestionsFailed', () => {
    expect(actions.lyricsSuggestionsFailed({
      error: 'Error'
    })).toMatchSnapshot();
  });

});
