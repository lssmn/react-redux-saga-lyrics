import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../loader';

describe('Loader component', () => {

  it('should render without exploding', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
  
});
