import {combineReducers} from 'redux';
import expenses from './expenses';
import overview from './overview';
import user from './user';

export default rootReducer = combineReducers({
	expenses,
	overview,
	user,
})