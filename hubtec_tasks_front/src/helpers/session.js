const setHeaders = (headers) => {
    console.log(headers)
    if(headers["access-token"] !== null){
        localStorage.setItem("access-token", headers["access-token"]);
        localStorage.setItem("client", headers["client"]);
        localStorage.setItem("uid", headers["uid"]);
    }
};

export {setHeaders};
