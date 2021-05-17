import { combineReducers } from 'redux';
import appSetting from './appSetting';
const appReducer = combineReducers({
  appSetting,
});


const rootReducer = (state = {}, action) => {
  return appReducer(state, action);
};

export default rootReducer;

