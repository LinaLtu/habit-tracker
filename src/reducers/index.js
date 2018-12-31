import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import itemsReducer from '../dux/items';

export default history =>
  combineReducers({
    router: connectRouter(history),
    items: itemsReducer
    // Other reducers
  });
