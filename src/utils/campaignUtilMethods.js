import moment from 'moment';
import $ from 'jquery';
import logger from './logger';
import campaignSchema from '../schemas/campaign';
import { InputDateFormat } from '../constants/dateConstants';
import ERROR_MESSAGES from '../constants/errorMessages';

//Filter the given campaigns by the startDate, endDate and searchTerm filters
export const filterCampaigns = ({
  campaigns = [],
  startDate: startDateRange,
  endDate: endDateRange,
  searchTerm,
}) => {
  startDateRange = moment(startDateRange, InputDateFormat);
  endDateRange = moment(endDateRange, InputDateFormat);
  //filter items by the start and end date ranges as well as search term
  campaigns =
    campaigns &&
    campaigns.filter(({ name, startDate, endDate }) => {
      let filtered = false;
      //Check if search term is available. If available, check if search term is present inside the campaign name (in case insensitive way)
      if (searchTerm && !name.trim().toLowerCase().includes(searchTerm.toLowerCase())) {
        filtered = true;
      }
      const startDateMoment = moment(startDate, InputDateFormat);
      const endDateMoment = moment(endDate, InputDateFormat);
      //Check if element is already filtered, if it is not, check if it is filtered by start date
      if (!filtered && startDateRange) {
        //If start date is before the start date range, filter it
        if (startDateMoment.isBefore(startDateRange) || endDateMoment.isBefore(startDateRange)) {
          filtered = true;
        }
      }
      //Check if element is already filtered, if it is not, check if it is filtered by end date
      if (!filtered && endDateRange) {
        //If end date is after the end date range, filter it
        if (startDateMoment.isAfter(endDateRange) || endDateMoment.isAfter(endDateRange)) {
          filtered = true;
        }
      }
      /*If end date is before the start date. It is an additional check for date. At the moment when adding 
        campaigns through javascript console function AddCampaigns, it is not reqiuired as campaigns having end date before start date 
        are not added in store. The check is useful when api is called for adding campaigns and we decide not to go with validation schema.*/
      if (endDateMoment.isBefore(startDateMoment)) {
        filtered = true;
      }
      return !filtered;
    });
  return campaigns;
};

//Check if campaign active
export const isCampaignActive = (startDate, endDate) => {
  const date = moment();
  const startDateMoment = moment(startDate, InputDateFormat);
  const endDateMoment = moment(endDate, InputDateFormat).add(1, 'days');
  return date.isBetween(startDateMoment, endDateMoment) ? 'Active' : 'Inactive';
};

//This is to validate one property of the camapaign property based on schema
//Returns empty string if it is valid
//Returns the name of the property if it is error
const validateProperty = (campaign, { name, type, validation = null }) => {
  const val = campaign[name];
  let isError = false;

  if (type === 'string' && (!val || typeof val !== 'string')) {
    isError = true;
  } else if (type === 'date' && (!val || !moment(val, InputDateFormat).isValid())) {
    isError = true;
  } else if (
    type === 'number' &&
    (typeof val === 'undefined' || val === null || val === false || isNaN(val))
  ) {
    isError = true;
  }

  if (!isError && validation) {
    return validation(campaign);
  }

  return isError ? name : '';
};

//Validate each campaign based on the schema
export const validateCampaign = (c) => {
  //Check if it is a json object. if not, alert user
  let errorMessage = '';
  if (!$.isPlainObject(c)) {
    logger.error(ERROR_MESSAGES.INVALID_JSON);
    errorMessage = ERROR_MESSAGES.INVALID_JSON;
    return [null, errorMessage];
  }
  //Iterate and validate each property
  campaignSchema.forEach((field) => {
    const result = validateProperty(c, field);
    errorMessage += `${errorMessage && result ? ', ' : ''}${result}`;
  });
  //If campaign is invalid, alert user and return null and error message
  if (errorMessage) {
    const fieldName = c.name ? ` for campaign ${c.name}` : '';
    const message = `Improper field value(s)${fieldName}: ${errorMessage}`;
    logger.error(message);
    return [null, message];
  } else {
    //If id is not provided, assign a random id
    if (!c.id) c.id = Math.round(Math.random() * 100000);
  }
  return [c];
};

//Adds Username to Campaigns. If userId from campaign array is not found in users then Unknown User is used
export const addUserNameToCampaign = (campaigns, users) =>
  campaigns.map((campaign) => {
    const matchedUser =
      users &&
      users.find((user) => {
        return user.id === campaign.userId;
      });
    const userName = matchedUser ? matchedUser.name : 'Unknown User';
    const updatedCampaigns = { ...campaign, userName };
    return updatedCampaigns;
  });
