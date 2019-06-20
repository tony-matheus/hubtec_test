import API from '../../../api';
import {setHeaders } from '../../../helpers/session';
// import { push } from 'react-router-redux'

export function signIn({email, password}) {
    const request = API.post('auth/sign_in', {email, password});

    return(dispatch) =>{
        request
            .then((response)=>{
                console.log(response.headers)
                setHeaders(response.headers);
            })
            .catch((error)=>{
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                console.log(error)
            })
    }
}
