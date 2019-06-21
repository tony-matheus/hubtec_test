import { FETCH_IN_PROGRESS, DELETE_IN_PROGRESS, ADD_IN_PROGRESS } from './constants';

// The initial state of the App
const initialState = { in_progress: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_IN_PROGRESS:
            return action.payload;
        // case DELETE_IN_PROGRESS:
        //     return state.filter(tweet => tweet.id !== action.payload);
        case ADD_IN_PROGRESS:
            console.log(state);
            console.log(action.payload);
            return [action.payload, ...state]
        default:
            return state;
    }
}
