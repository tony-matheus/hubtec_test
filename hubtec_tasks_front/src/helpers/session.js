const setHeaders = (headers) => {
    console.log(headers);
    if(headers["access-token"] !== ""){
        console.log(["access-token"]);
        localStorage.setItem("access-token", headers["access-token"]);
        localStorage.setItem("client", headers["client"]);
        localStorage.setItem("uid", headers["uid"]);
    }
};

const getHeaders =  () => {
    return {
        "access-token" : localStorage.getItem("access-token"),
        "client" : localStorage.getItem("client"),
        "uid" : localStorage.getItem("uid")
    }
};

const logoutSession = () => {
    localStorage.setItem("access-token", "");
    localStorage.setItem("client", "");
    localStorage.setItem("uid", "");
};

const response_error = (errors) => {
    console.log(errors)
    let response = "";
    errors.forEach((item, index) => {
        response += item + "<br/>";
    });
    return response;
}

// const BASE_URL = "http://172.18.9.122:3000";
const BASE_URL = "http://localhost:3000";
const BASE_FRONT_URL = "http://localhost:3001";

export {setHeaders, getHeaders, logoutSession, BASE_URL, BASE_FRONT_URL, response_error};
