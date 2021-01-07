import fetchUsers from '../../apis/fetchUsers';
import { addCampaigns, setUsersSuccess, setUsersFailure } from '../actions/campaigns';
import { validateCampaign, addUserNameToCampaign } from '../../utils/campaignUtilMethods';
import logger from '../../utils/logger';
import ERROR_MESSAGES from '../../constants/errorMessages';

//thunk function that returns a function to fetch Users asynchronously
export const fetchUsersData = () => async (dispatch) => {
  const {users, isError} = await fetchUsers();
  if (!isError) dispatch(setUsersSuccess({ users }));
  else dispatch(setUsersFailure({ users, userErrorMessage: ERROR_MESSAGES.NO_USER_DATA }));
};

export const addCampaignsData = ({newCampaigns}) => (dispatch, getState) => {
  //Check if newCampaings is array and has atleast one element
  const state = getState();
  let inValidCampaignErrorMessage = [];
  if (newCampaigns && Array.isArray(newCampaigns) && newCampaigns.length) {
    //Validate each new campaign and push in to validCampaigns array
    const validCampaigns = newCampaigns.filter((c) => {
      const [campaign, errorMessage] = validateCampaign(c);
      if (errorMessage) {
        inValidCampaignErrorMessage.push(errorMessage);
      }
      if (campaign) {
        return campaign;
      }
    });
    //If validCampaigns are available
    if (validCampaigns.length) {
      //If validCampaigns are lesser than newCampaigns, warn user that some campaigns are invalid
      if (validCampaigns.length !== newCampaigns.length) logger.warn('Some campaigns are invalid.');
      const modifiedCampaigns = addUserNameToCampaign(validCampaigns, state.campaigns.users);
      logger.info('New Campaigns Successfully added!');
      return dispatch(
        addCampaigns({
          campaigns: [...modifiedCampaigns, ...state.campaigns.campaigns],
          errorMessage: inValidCampaignErrorMessage,
        }),
      );
    }
  }
  // If no campaigns are available when adding campaigns from console
  logger.error(ERROR_MESSAGES.INVALID_CAMPAIGN);
  return dispatch(addCampaigns({ errorMessage: inValidCampaignErrorMessage }));
};
