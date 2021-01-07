import {
  CHANGE_START_DATE,
  CHANGE_END_DATE,
  CHANGE_SEARCH_TERM,
  RESET_FILTERS,
} from './actionTypes';

//Action to change start date filter
//Payload accepts startDate string (as output format in settings file)
export const changeStartDate = (payload) => ({
  type: CHANGE_START_DATE,
  payload,
});

//Action to change end date filter
//Payload accepts endDate string (as output format in settings file)
export const changeEndDate = (payload) => ({
  type: CHANGE_END_DATE,
  payload,
});

//Action to change search term filter
//Payload accepts searchTerm string (as output format in settings file)
export const changeSearchTerm = (payload) => ({
  type: CHANGE_SEARCH_TERM,
  payload,
});

//Action to reset all filters
export const resetFilters = () => ({
  type: RESET_FILTERS,
});
