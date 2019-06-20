import API from '../../../api';
import {setHeaders } from '../../../helpers/session';
import { push } from 'react-router-redux'

export function signUp({name, email, password, password_confirmation}) {
    console.log(name, email, password, password_confirmation);

    const request = API.post('/auth', {name, email, password, password_confirmation});

    return(dispatch) =>{
        request
            .then((response)=>{
                setHeaders(response.headers);
                window.Materialize.toast('Register Successful', 4000, 'green');
                // dispatch(push('/dashboard'))
                // window.location.replace("http://localhost:3001/dashboard")

            })
            .catch((error) => {
                window.Materialize.toast('User or password incorrect', 4000, 'red');
                console.log(error)
                // dispatch(push('/dashboard'))
            })
    }
}
