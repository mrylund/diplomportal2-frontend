import axios from 'axios'

const basepath = "https://diplomportal2-backend.herokuapp.com/"

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

export const getcourses = () =>
    query('get', basepath + 'courses')

export const getcourse = (id) =>
    query('get', basepath + `courses/${id}`)