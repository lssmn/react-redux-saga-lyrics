import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  ResultContainer,
  mapStateToProps,
} from '../result';

describe('Result Container', () => {

  const defaultProps = {
    lyrics: '',
    fetching: false,
    error: null,
  };

  describe('Component', () => {
  
    it('should render without exploding', () => {
      const wrapper = shallow(<ResultContainer {...defaultProps} />);

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error gracefully', () => {
      const wrapper = shallow(
        <ResultContainer
          {...defaultProps}
          error={'Error!'}
        />);

      expect(wrapper.find('Message[type="error"]').length).toBe(1);
    });

    it('should show the loader in certain conditions', () => {
      const wrapper = shallow(
        <ResultContainer
          {...defaultProps}
          fetching
        />
      );

      expect(wrapper.find('Loader').length).toBe(1);

      wrapper.setProps({
        error: 'Error'
      });

      expect(wrapper.find('Loader').length).toBe(0);
    });

    it('should show the result correctly', () => {
      const lyrics = 'Lyrics';
      const wrapper = shallow(<ResultContainer {...defaultProps} lyrics={lyrics} />);

      expect(wrapper.find('Lyrics').children().text()).toBe(lyrics);
    });
  
  });

  describe('Redux', () => {

    it('should map the correct props', () => {
      const state = {
        result: {
          lyrics: 'Test',
          error: null,
          fetching: false,
        }
      };
      const props = mapStateToProps(state);

      expect(props.lyrics).toBe(state.result.lyrics);
      expect(props.fetching).toBe(state.result.fetching);
      expect(props.error).toBe(state.result.error);
    });
  
  });

});
