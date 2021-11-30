

export const getTokenFromClient = () => {
    return window.localStorage.getItem('portal-jwt-Token')
}

export const setTokenForClient = (token) => {
    localStorage.setItem("portal-jwt-Token", token);
}