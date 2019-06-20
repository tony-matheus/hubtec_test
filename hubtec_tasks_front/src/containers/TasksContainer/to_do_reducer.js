import { FETCH_TO_DOS, DELETE_TO_DO, ADD_TO_DO } from './constants';

// The initial state of the App
const initialState = { to_do: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_TO_DOS:
            console.log(action.payload)
            return action.payload;
        case DELETE_TO_DO:
            return state.filter(tweet => tweet.id !== action.payload);
        case ADD_TO_DO:
            console.log(state);
            console.log(action.payload);
            return [action.payload, ...state]
        default:
            return state;
    }
}
