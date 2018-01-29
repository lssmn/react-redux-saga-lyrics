import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../footer';

describe('Footer component', () => {

  it('should render without exploding', () => {
    const wrapper = shallow(<Footer />);
    
    expect(wrapper).toMatchSnapshot();
  });

});
