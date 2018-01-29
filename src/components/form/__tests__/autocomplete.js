import React from 'react';
import { shallow } from 'enzyme';
import { AutoComplete, renderAutocompleteItem } from '../autocomplete';

describe('AutoComplete', () => {
  
  describe('Helpers', () => {

    it('should render without exploding', () => {
      expect(renderAutocompleteItem({
        artist: {}, 
        album: {}, 
        title: ''
      }, false)).toMatchSnapshot();
    });
    
  });

  describe('Component', () => {
    const items = [
      {
        artist: {}, 
        album: {}, 
        title: ''
      }
    ];

    it('should render without exploding', () => {
      const wrapper = shallow(<AutoComplete items={items} />);
      
      expect(wrapper).toMatchSnapshot();
    });

  });
  
});
