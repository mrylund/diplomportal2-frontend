

export const getTokenFromClient = () => {
    return window.localStorage.getItem('portal-jwt-Token')
}

export const setTokenForClient = (token) => {
    localStorage.setItem("portal-jwt-Token", token);
}

export const deleteTokenFromClient = () => {
    localStorage.removeItem("portal-jwt-Token");
}