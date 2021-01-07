import React from 'react';
import { shallow } from 'enzyme';
import CampaignTable from './index';

const renderCampaignTable = (props) => {
  const initialProps = {
    campaigns: [
      {
        name: 'mockname1',
        userName: 'mockUserName1',
        startDate: '04/01/2021',
        endDate: '04/01/2021',
        isActive: true,
        budgetInUSD: '14k',
      },
      {
        name: 'mockname2',
        userName: 'mockUserName2',
        startDate: '04/01/2021',
        endDate: '04/01/2021',
        isActive: true,
        budgetInUSD: '14k',
      },
    ],
    ...props,
  };

  const wrapper = shallow(<CampaignTable {...initialProps} />);
  return wrapper;
};

describe('<CampaignTable />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = renderCampaignTable();
  });

  it('should contain table', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });

  it('should contain 6 th tag', () => {
    expect(wrapper.find('th')).toHaveLength(6);
  });

  it('should contain 2 tr tag', () => {
    expect(wrapper.find('tbody').find('tr')).toHaveLength(2);
  });
});
