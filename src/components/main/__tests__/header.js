import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

describe('Header component', () => {

  it('should render without exploding', () => {
    const wrapper = shallow(<Header />);
    
    expect(wrapper).toMatchSnapshot();
  });

});
