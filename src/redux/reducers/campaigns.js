import {
  ADD_CAMPAIGNS,
  REQUEST_USERS,
  SET_USERS_SUCCESS,
  SET_USERS_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  campaigns: [],
  errorMessage: null,
  users: [],
  userErrorMessage: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAMPAIGNS:
      return { ...state, ...action.payload };
    case REQUEST_USERS:
      return { ...state, isLoading: true };
    case SET_USERS_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case SET_USERS_FAILURE:
      return { ...state, ...action.payload, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
