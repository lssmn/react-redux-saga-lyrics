import React from 'react';
import { shallow } from 'enzyme';
import Message from '../message';

const defaultProps = {
  type: 'info',
  size: 'l',
};

describe('Message component', () => {

  it('should render without exploding', () => {
    const wrapper = shallow(<Message {...defaultProps}>My message</Message>);
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render passing the size prop', () => {
    const wrapper = shallow(
      <Message size="m">
        My message
      </Message>
    );
    
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should render passing the type prop', () => {
    const wrapper = shallow(
      <Message type="error">
        My message
      </Message>
    );
    
    expect(wrapper).toMatchSnapshot();
  });
  
});
