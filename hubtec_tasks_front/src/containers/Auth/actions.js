import {BASE_FRONT_URL, getHeaders, logoutSession} from "../../helpers/session";
import API from "../../api";

export function logout(){
    const headers = getHeaders();

    const request = API.delete('/auth/sign_out',  {headers: headers});
    return(dispatch) => {
        request
            .then((response)=>{
                logoutSession();
                window.location.replace(BASE_FRONT_URL+"/auth/sign-in")
            })
            .catch((error) => {
                window.location.replace("http://localhost:3001/auth/sign-in");
            })
    }
}
