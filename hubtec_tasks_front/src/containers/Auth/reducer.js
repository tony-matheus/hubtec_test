import { UPDATE_CURRENT_USER, REMOVE_CURRENT_USER } from './constants';

// The initial state of the App
const initialState = { current_user: {} };

export default function(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CURRENT_USER:
            return action.payload
        case REMOVE_CURRENT_USER:
            return {}
        default:
            return state;
    }
}
