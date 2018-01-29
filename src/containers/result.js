import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../components/main/loader';
import Message from '../components/main/message';
import Lyrics from '../components/music/lyrics';

export class ResultContainer extends Component {
  render() {
    const {
      lyrics,
      fetching,
      error,
    } = this.props;
    
    return (
      <section>
        {
          (
            error && 
            <Message type="error">
              {error}
            </Message>
          ) || 
          (
            <div> 
              {
                ( fetching && <Loader /> ) || 
                ( lyrics ? 
                  <Lyrics>
                    {lyrics}
                  </Lyrics> :
                  <Message>
                    Nothing to show
                  </Message>
                )
              }
            </div>
          )}
      </section>
    );
  }
}

ResultContainer.propTypes = {
  fetching: PropTypes.bool.isRequired,
  lyrics: PropTypes.string,
  error: PropTypes.string
};

export function mapStateToProps(state) {
  const {
    lyrics,
    error,
    fetching,
  } = state.result;

  return {
    error,    
    fetching,
    lyrics,    
  };
}

export default connect(
  mapStateToProps,
  null
)(ResultContainer);
