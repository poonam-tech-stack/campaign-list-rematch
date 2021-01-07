import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('<Header />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
