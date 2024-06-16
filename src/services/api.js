import axios from 'axios';

const baseURL = 'http://localhost:4040' // window.api.URL; // Замените на ваш базовый URL

const headers = {
    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
}

const instance = axios.create({
    baseURL,
    headers
    // Другие настройки Axios, если необходимо
});

export default instance;
