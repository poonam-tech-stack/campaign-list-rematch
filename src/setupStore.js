import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import campaignReducer from './redux/reducers/campaigns';
import filterFormReducer from './redux/reducers/filterForm';

const rootReducer = combineReducers({
  campaigns: campaignReducer,
  filters: filterFormReducer,
});

// using applyMiddleware to add thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));

const getStore = () => store;

export default getStore;
