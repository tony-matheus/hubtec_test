import { FETCH_DONES, DELETE_DONE, ADD_DONE } from './constants';

// The initial state of the App
const initialState = { done: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DONES:
            return action.payload;
        case DELETE_DONE:
            return state.filter(done => done.id !== action.payload);
        case ADD_DONE:
            console.log(state);
            console.log(action.payload);
            return [action.payload, ...state]
        default:
            return state;
    }
}
