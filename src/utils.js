import { verifyUser } from "./libs/requests";


export const getTokenFromClient = () => {
    return window.localStorage.getItem('portal-jwt-Token')
}

export const setTokenForClient = (token) => {
    localStorage.setItem("portal-jwt-Token", token);
}

export const deleteTokenFromClient = () => {
    localStorage.removeItem("portal-jwt-Token");
}

export const isUserAuthorized = async () => {
    const token = getTokenFromClient()
    // Return false for no token
    if (!token) {
        return false
    // Check to see if the token is still valid
    } else {
        const isAuthorized = await verifyUser(token)
        return isAuthorized.success
    }

}