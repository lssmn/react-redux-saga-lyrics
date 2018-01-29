import React from 'react';
import { shallow } from 'enzyme';
import Lyrics from '../Lyrics';

describe('Lyrics component', () => {
  
  it('should render without exploding', () => {
    const wrapper = shallow(<Lyrics>Test</Lyrics>);
    
    expect(wrapper).toMatchSnapshot();
  });

});
