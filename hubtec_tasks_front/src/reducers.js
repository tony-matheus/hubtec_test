import { combineReducers } from "redux";
// import the create reducers
import CurrentUserReducer from './containers/Auth/reducer';
import TodoReducer from './containers/TasksContainer/to_do_reducer';
import InProgressReducer from './containers/TasksContainer/in_progress_reducer';
import DoneReducer from './containers/TasksContainer/done_reducer';
import DeletedReducer from './containers/DeletedTasksContainer/reducer'

const rootReducer = combineReducers({
    current_user: CurrentUserReducer,
    to_do: TodoReducer,
    in_progress: InProgressReducer,
    done: DoneReducer,
    deleted: DeletedReducer
});

export default rootReducer;
