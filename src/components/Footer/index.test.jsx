import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('<Footer />', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
