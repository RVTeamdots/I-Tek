const setJwt = token => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("accessToken", token);
    }

}

const getJwt = () => {

    
if (typeof window !== 'undefined') {
    const token = localStorage.getItem("accessToken");
    if(token !== null && token !== undefined) {
        return token;
    } else {
        return null;
    }
}
 
}

const removeJWT = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("accessToken");
    }

}

const isValidToken = () => {
    const token = getJwt();
    if(!token) {
        return false
    }

    return true;
}

export default {
    setJwt,
    getJwt,
    removeJWT,
    isValidToken
}

