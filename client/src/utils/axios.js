import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://mongodb-newsapi.herokuapp.com'
});

export default instance;