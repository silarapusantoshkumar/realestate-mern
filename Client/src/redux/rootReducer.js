import { combineReducers } from 'redux';
// import { registerReducer } from './registerReducer';
// import { loginReducer } from './loginReducer';
import changeReducer from './reducer';
import mapReducer from './mapReducer';
import coordsReducer from './coordsReducer';
import location from './location';
const rootReducer = combineReducers({
    auth:changeReducer,
    map:mapReducer,
    coords:coordsReducer,
    location:location
});
export default rootReducer