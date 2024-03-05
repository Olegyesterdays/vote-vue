import axios from 'axios';

const baseURL = 'http://localhost:8000/api/v1'; // Замените на ваш базовый URL

const headers = {
    Authorization: `Bearer ${ localStorage.getItem('authToken') }`
}

const instance = axios.create({
    baseURL,
    headers
    // Другие настройки Axios, если необходимо
});

export default instance;
