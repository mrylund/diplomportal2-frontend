import axios from 'axios'
import { getTokenFromClient } from '../utils';


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
    return query('post', basepath + 'students/authenticate', data)
}

export const getCurrentUser = () => {    
    const data = {
        authorization: getTokenFromClient()
    }
    return query('post', basepath + 'students/current', data)
}

export const updateCurrentUserName = (name, token) => {
    const data = {
        authorization: token,
        name: name
    }
    return query('put', basepath + 'students/current/name', data)
}

export const addStudentToCourse = (id, token) => {
    const data = {
        authorization: token,
        id: id // kursusnummer
    }
    return query('put', basepath + 'students/current/courses', data)
}

export const createStudent = (student) =>
    query('post', basepath + 'students', student)

export const getCourses = () =>
    query('get', basepath + 'courses')

export const getCourse = (id) =>
    query('get', basepath + `courses/${id}`)

export const createCourse = (course) =>
    query('post', basepath + 'courses', course)

export const logIn = () =>
    query('get', basepath + 'login')

export const logOut = () =>
    query('get', 'https://auth.dtu.dk/dtu/logout')


export const defaultStudent = {
    name: '',
    studyNumber: '' // TODO: check if studyNumber is unique
}

export const defaultCourse = {
    courseNumber: '',
    title: '',
    weekDay: '', // Format: first two letters of the day, e.g. 'ma' + 0, 1 or 2 describing the schedule period. E.g. 'ma0' for Monday in period 0.
    sheets: '' // Google Sheets id, e.g. 1SxaB7WiuMFWqgWu3OuKJPc2hZ9_7tzLH58we0bhvDoo
}