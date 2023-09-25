export const BASE_URL = 'http://localhost:3000';

const getUrl = (url: string) => {
    return BASE_URL + url
}

export const httpRequest = (apiPath: string, method: string = METHOD.GET, payload: any = null) => {
    const url = getUrl(apiPath)
    const req = {
        url,
        method: method,
        payload: payload
    }
    return req
}

export const METHOD = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
}

//login
export const LOGIN = '/login';
export const REGISTER = '/register';
export const CHANGE_PASSWORD = '/change-password'
export const FORGOT_PASSWORD = '/forgot-password'

//exam
export const GET_IELTS_READING_TEST = '/pdf-translate'

//home
