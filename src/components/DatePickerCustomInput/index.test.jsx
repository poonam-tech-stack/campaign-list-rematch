import React from 'react';
import { shallow } from 'enzyme';
import DatePickerCustomInput from './index';

describe('<DatePickerCustomInput />', () => {
  let wrapper = null;
  beforeEach(() => {
    wrapper = shallow(<DatePickerCustomInput />);
  });
  it('check if button is loaded', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
