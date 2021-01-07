import { ADD_CAMPAIGNS, SET_USERS_SUCCESS, SET_USERS_FAILURE } from './actionTypes';

//Action to add new campaigns
//Payload accepts campaigns array as newCampaigns
export const addCampaigns = (payload) => ({
  type: ADD_CAMPAIGNS,
  payload,
});

//Action to set Users data on Successful API response
export const setUsersSuccess = (payload) => ({
  type: SET_USERS_SUCCESS,
  payload,
});

//Action to set Users data on Failure of API
export const setUsersFailure = (payload) => ({
  type: SET_USERS_FAILURE,
  payload,
});
