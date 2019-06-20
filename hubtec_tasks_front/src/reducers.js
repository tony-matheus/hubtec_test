import { combineReducers } from "redux";
// import the create reducers
import CurrentUserReducer from './containers/Auth/reducer';

const rootReducer = combineReducers({
    current_user: CurrentUserReducer
});

export default rootReducer;
