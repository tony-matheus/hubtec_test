import API from '../../api';
import {setHeaders, getHeaders} from '../../helpers/session';
import {DELETE_DELETED} from './constants'

export function recycle_task({id}){
    const headers = getHeaders();
    const request = API.get('/api/v1/tasks/'+id+'/recycle', {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                setHeaders(response.headers);
                dispatch({ type: DELETE_DELETED, payload: id });
            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                setHeaders(error.headers);
            })
    }
}

export function true_delete_task({id}){
    const headers = getHeaders();
    const request = API.delete('/api/v1/tasks/'+id+'/delete', {headers: headers});
    return(dispatch) => {
        request
            .then((response) => {
                setHeaders(response.headers);
                dispatch({ type: DELETE_DELETED, payload: id });
            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                setHeaders(error.headers);
            })
    }
}