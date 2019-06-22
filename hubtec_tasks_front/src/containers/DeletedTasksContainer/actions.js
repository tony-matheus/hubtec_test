import API from '../../api';
import {setHeaders, getHeaders, logoutSession, response_error, BASE_FRONT_URL} from '../../helpers/session';
import {DELETE_DELETED} from './constants'
import {DELETE_DONE, DELETE_IN_PROGRESS, DELETE_TO_DO} from "../TasksContainer/constants";

export function recycle_task({id}){
    console.warn(id);
    const headers = getHeaders();
    const request = API.get('/api/v1/tasks/'+id+'/recycle', {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                setHeaders(response.headers);
                console.log(id);
                dispatch({ type: DELETE_DELETED, payload: id });
            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                setHeaders(error.headers);
            })
    }
}

export function true_delete_task({id}){
    console.warn(id);
    const headers = getHeaders();
    const request = API.delete('/api/v1/tasks/'+id+'/delete', {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                console.log(response.headers);
                setHeaders(response.headers);
                console.log(id);
                dispatch({ type: DELETE_DELETED, payload: id });
            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                setHeaders(error.headers);
            })
    }
}