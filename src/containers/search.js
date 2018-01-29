import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import params from '../constants/params';
import AutoComplete from '../components/form/autocomplete';
import { lyricsGet, lyricsSuggestions } from '../actions/lyrics';

export const displaySong = song => `${song.artist} - ${song.title}`;

export class SearchContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.song !== nextProps.song) {
      this.setState({
        input: displaySong(nextProps.song)
      });
    }
  }
  handleInputChange({ target }) {
    this.setState({
      input: target.value
    });
    if (target.value.length >= params.maxInput) {
      this.props.actions.lyricsSuggestions(target.value);
    }
  }
  handleInputSelect(value, { title, artist }) {
    this.props.actions.lyricsGet({
      title,
      artist,
    });
  }
  render() {
    const { input } = this.state;
    const { suggestions } = this.props;

    return (
      <AutoComplete
        value={input}
        items={suggestions}
        onChange={this.handleInputChange.bind(this)}
        onSelect={this.handleInputSelect.bind(this)}
      />
    );
  }
}

SearchContainer.propTypes = {
  song: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  suggestions: PropTypes.array.isRequired,
};

export function mapStateToProps(state) {
  const {
    song,
    suggestions,
  } = state.search;

  return {
    song,
    suggestions,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      lyricsGet,
      lyricsSuggestions,
    }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer);
