import moment from 'moment';
import { InputDateFormat } from '../constants/dateConstants';
import { filterCampaigns, isCampaignActive, validateCampaign } from './campaignUtilMethods';

describe('Campaign utilities', () => {
  let campaigns = null;

  beforeEach(() => {
    campaigns = [
      {
        id: 1,
        name: 'mockName1',
        startDate: '9/19/2017',
        endDate: '3/9/2018',
        Budget: 88377,
        userId: 1,
      },
      {
        id: 2,
        name: 'mockName2',
        startDate: '11/21/2017',
        endDate: '2/21/2018',
        Budget: 608715,
        userId: 2,
      },
      {
        id: 3,
        name: 'mockName3',
        startDate: '11/1/2017',
        endDate: '6/20/2020',
        Budget: 239507,
        userId: 3,
      },
      { id: 4, name: 'mockName4', startDate: '8/25/2017', endDate: '11/30/2017', Budget: 179838 },
    ];
  });
  describe('filterCampaigns utility method', () => {
    it('should return all elements when no filtering criteria is passed.', () => {
      const length = campaigns.length;
      const newCampaigns = filterCampaigns({ campaigns });
      expect(newCampaigns).toHaveLength(length);
    });

    it('should return elements within the date range when date range is specified.', () => {
      const startDate = '11/20/2017';
      const endDate = '10/3/2019';
      const newCampaigns = filterCampaigns({ campaigns, startDate, endDate });
      expect(newCampaigns).toHaveLength(1);
    });

    it('should return zero elements when no campaign is within the date range.', () => {
      const startDate = '11/21/2021';
      const endDate = '10/2/2022';
      const newCampaigns = filterCampaigns({ campaigns, startDate, endDate });
      expect(newCampaigns).toHaveLength(0);
    });

    it('should return zero elements within the date range when date range is wrong.', () => {
      const startDate = '11/20/2022';
      const endDate = '10/3/2021';
      const newCampaigns = filterCampaigns({ campaigns, startDate, endDate });
      expect(newCampaigns).toHaveLength(0);
    });

    it('should return elements which has the search term in the campaign name.', () => {
      const searchTerm = 'mockName1';
      const newCampaigns = filterCampaigns({ campaigns, searchTerm });
      expect(newCampaigns).toHaveLength(1);
    });

    it('should return zero elements when search term is not found in campaign name.', () => {
      const searchTerm = 'test';
      const newCampaigns = filterCampaigns({ campaigns, searchTerm });
      expect(newCampaigns).toHaveLength(0);
    });

    it('should return zero elements when no campaigns are passed.', () => {
      const newCampaigns = filterCampaigns({});
      expect(newCampaigns).toHaveLength(0);
    });
  });

  describe('isCampaignActive', () => {
    it('should return Active when date is in between start and end dates', () => {
      const startDate = moment().subtract(1, 'days').format(InputDateFormat);
      const endDate = moment().add(1, 'days').format(InputDateFormat);
      const isActive = isCampaignActive(startDate, endDate);
      expect(isActive).toEqual('Active');
    });
    it('should return Inactive when date is not in between start and end dates', () => {
      const startDate = moment().add(1, 'days').format(InputDateFormat);
      const endDate = moment().add(3, 'days').format(InputDateFormat);
      const isActive = isCampaignActive(startDate, endDate);
      expect(isActive).toEqual('Inactive');
    });
  });

  describe('validateCampaign utility method', () => {
    it('should return true when valid campaign data is provided', () => {
      const isValid = validateCampaign(campaigns[0]);
      expect(isValid).toBeTruthy();
    });

    it('should return false when parameter is not object', () => {
      console.error = () => {};
      const isValidArray = validateCampaign('1234');
      expect(isValidArray[0]).toBeFalsy();
      expect(isValidArray[1]).toEqual('Campaign value is improper. Please provide JSON objects.');
    });

    it('should return false when name is not string', () => {
      console.error = () => {};
      const c = { ...campaigns[0] };
      c.name = 123;
      const isValidArray = validateCampaign(c);
      expect(isValidArray[0]).toBeFalsy();
      expect(isValidArray[1]).toEqual('Improper field value(s) for campaign 123: name');
    });

    it('should return false when name is null', () => {
      console.error = () => {};
      const c = { ...campaigns[0] };
      c.name = null;
      const isValidArray = validateCampaign(c);
      expect(isValidArray[0]).toBeFalsy();
      expect(isValidArray[1]).toEqual('Improper field value(s): name');
    });

    it('should return false when budget is null', () => {
      console.error = () => {};
      const c = { ...campaigns[0] };
      c.Budget = null;
      const isValidArray = validateCampaign(c);
      expect(isValidArray[0]).toBeFalsy();
      expect(isValidArray[1]).toEqual('Improper field value(s) for campaign mockName1: Budget');
    });

    it('should create random id if id is not passed', () => {
      console.error = () => {};
      const c = { ...campaigns[0] };
      c.id = null;
      const newCampaign = validateCampaign(c);
      expect(newCampaign[0].id).toBeTruthy();
    });

    it('should return false when parameter is not object', () => {
      console.error = () => {};
      const isValidArray = validateCampaign({
        name: 'Campaign 2',
        startDate: '9/19/2018',
        endDate: '3/9/2017',
        Budget: 1,
      });
      expect(isValidArray[0]).toBeFalsy();
      expect(isValidArray[1]).toEqual(
        'Improper field value(s) for campaign Campaign 2: end date is before the start date, userId',
      );
    });
  });
});
