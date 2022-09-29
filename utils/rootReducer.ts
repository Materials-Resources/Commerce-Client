import { combineReducers } from 'redux';
import navigationReducer from './features/navigation/navigationReducer';

export default combineReducers({
    navigation: navigationReducer
});