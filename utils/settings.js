//https://api.example.com
//http://127.0.0.1:8000
export const API_BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:8000'
export const IMAGE_URL =  API_BASE_URL + '/storage/'
export const BASE_URL = process.env.NODE_ENV === 'production' ? '' : ''