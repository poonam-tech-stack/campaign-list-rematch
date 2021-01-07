import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './index';

describe('<Spinner />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
