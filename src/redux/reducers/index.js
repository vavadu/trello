import { combineReducers } from 'redux';
import cardsReducer from './cardReducers';
import userReducer from "./userReducer";
import statusesReducer from './statusesReducer';

export default combineReducers({
    auth: userReducer,
    cards: cardsReducer,
    statuses: statusesReducer,
})