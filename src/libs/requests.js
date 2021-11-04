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

export const getStudent = (id) =>
    query('get', basepath + `students/${id}`)

export const getCourses = () =>
    query('get', basepath + 'courses')

export const getCourse = (id) =>
    query('get', basepath + `courses/${id}`)

export const logIn = () =>
    query('get', basepath + 'login')

export const logOut = () =>
    query('get', 'https://auth.dtu.dk/dtu/logout')
