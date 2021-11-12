import axios from 'axios'

console.log("Environment:", process.env.NODE_ENV);
console.log('TEST MERE: ' + process.env.BACKEND_URL);

const basepath = process.env.REACT_APP_BACKEND_URL;

const parseResponseOrError = response => {
    return {
        data: response.data || response,
        success: !!(response && response.data)
    }
}

const parseError = e => {
    console.error('error: ', e.response.data);
    return `${e}: ${JSON.stringify(e.response.data)}`
}

const query = async (method, query, data = {}) =>
    parseResponseOrError(await axios[method](query, data).catch(parseError))

export const getStudents = () =>
    query('get', basepath + 'students')

export const getStudent = (id) => {
    return query('get', basepath + `students/${id}`)
}
    
export const verifyUser = (token) => {
    const data = {
        authorization: token
    }
    return query('post', basepath + 'student/authenticate', data)
}

export const getCurrentUser = (token) => {
    const data = {
        authorization: token
    }
    return query('post', basepath + 'student/current', data)
}

export const updateCurrentUserName = (name, token) => {
    const data = {
        authorization: token,
        name: name
    }
    return query('put', basepath + 'students/current/name', data)
}

export const getCourses = () =>
    query('get', basepath + 'courses')

export const getCourse = (id) =>
    query('get', basepath + `courses/${id}`)

export const logIn = () =>
    query('get', basepath + 'login')

export const logOut = () =>
    query('get', 'https://auth.dtu.dk/dtu/logout')
