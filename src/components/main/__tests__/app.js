import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';

describe('App component', () => {

  it('should render without exploding', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
  
});
