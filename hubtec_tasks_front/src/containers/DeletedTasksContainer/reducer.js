import { FETCH_DELETED, DELETE_DELETED, ADD_DELETED } from './constants';

// The initial state of the App
const initialState = { deleted: [] };

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DELETED:
            console.log(action.payload)
            return action.payload;
        case DELETE_DELETED:
            return state.filter(deleted => deleted.id !== action.payload);
        case ADD_DELETED:
            console.log(state);
            console.log(action.payload);
            return [action.payload, ...state]
        default:
            return state;
    }
}
