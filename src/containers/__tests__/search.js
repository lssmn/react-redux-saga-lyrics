import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  SearchContainer,
  displaySong,
  mapStateToProps,
  mapDispatchToProps,
} from '../search';

describe('Search Container', () => {

  const defaultProps = {
    actions: {
      lyricsGet: () => {},
      lyricsSuggestions: () => {},
    },
    song: {},
    suggestions: [],
  };
  
  const suggestions = [
    {
      title: 'a',
      artist: 'a',
      album: {
        title: 'a',
        picture: 'a',
      },
    },
    {
      title: 'b',
      artist: 'b',
      album: {
        title: 'b',
        picture: 'b',
      },
    },
  ];

  describe('Helpers', () => {

    it('should display artist and song title correctly', () => {
      const song = {
        artist: 'Artist',
        title: 'Test',
      };

      expect(displaySong(song)).toBe(`${song.artist} - ${song.title}`);
    });
    
  });

  describe('Component', () => {
  
    it('should render without exploding', () => {
      const wrapper = shallow(<SearchContainer {...defaultProps} />);
    
      expect(wrapper).toMatchSnapshot();
    });

    it('should change the state on componentWillReceiveProps', () => {
      const wrapper = mount(<SearchContainer {...defaultProps} />);
      const instance = wrapper.instance();
      const song = {
        artist: 'Artist',
        title: 'Test',
      };

      instance.componentWillReceiveProps({
        song
      });

      expect(wrapper.props().song).not.toBe(song);
      expect(wrapper.state().input).toBe(displaySong(song));
    });
  
    describe('handleInputChange', () => {

      function simulateInputChange(wrapper, value) {
        const input = wrapper.find('input');
        const event = {
          target: {
            value
          }
        };
  
        input.simulate('change', event);
      }
  
      it('should call handleInputChange on input change', () => {
        const spyHandleInputChange = jest.spyOn(SearchContainer.prototype, 'handleInputChange');
        const wrapper = mount(
          <SearchContainer
            {...defaultProps} 
          />
        );
      
        simulateInputChange(wrapper, 'test');
  
        expect(spyHandleInputChange).toHaveBeenCalled();
      });
  
      it('should set the state and not trigger the action if the input is not acceptable', () => {
        const spyLyricsSuggestions = jest.fn();
        const wrapper = mount(
          <SearchContainer
            {...defaultProps} 
            actions={
              {
                lyricsSuggestions: spyLyricsSuggestions
              }
            } 
          />
        );
        const value = 't';
  
        simulateInputChange(wrapper, value);
  
        expect(wrapper.state().input).toBe(value);
        expect(spyLyricsSuggestions).not.toHaveBeenCalled();
      });
  
      it('should set the state and trigger lyricsSuggestions', () => {
        const spyLyricsSuggestions = jest.fn();
        const wrapper = mount(
          <SearchContainer
            {...defaultProps} 
            actions={
              {
                lyricsSuggestions: spyLyricsSuggestions
              }
            } 
          />
        );
        const value = 'test';
  
        simulateInputChange(wrapper, value);
  
        expect(wrapper.state().input).toBe(value);
        expect(spyLyricsSuggestions).toHaveBeenCalledWith(value);
      });
  
    });

    describe('handleInputSelect', () => {

      function simulateSelect(wrapper) {
        const input = wrapper.find('input');
  
        input.simulate('focus');

        wrapper.setState({
          input: 'a'
        });

        input.simulate('keyDown', 
          {
            key : 'Enter', 
            keyCode: 13, 
            which: 13,
            preventDefault() { } 
          }
        );
      }

      it('should trigger the action lyricsGet', () => {
        const spyLyricsGet = jest.fn();
        const wrapper = mount(
          <SearchContainer {...defaultProps} 
            suggestions={suggestions} 
            actions={
              {
                lyricsGet: spyLyricsGet
              }
            } 
          />
        );

        simulateSelect(wrapper);
    
        expect(spyLyricsGet).toHaveBeenCalledWith({
          title: 'a',
          artist: 'a',
        });
      });
    
    });

    describe('Redux', () => {

      it('should map the correct props', () => {
        const state = {
          search: {
            song: {
              artist: 'Fake Artist',
              title: 'Fake Title',
            },
            suggestions: [1, 2, 3],
          }
        };
        const props = mapStateToProps(state);

        expect(props.song).toBe(state.search.song);
        expect(props.suggestions).toBe(state.search.suggestions);
      });
    
      it('should map the correct actions', () => {
        const props = mapDispatchToProps(() => {});

        expect(Object.keys(props.actions).length).toBe(2);
      });
    
    });
  
  });

});
