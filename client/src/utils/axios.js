import axios from 'axios';

export const axiosInstance = axios.create({
    baseUrl: "https://mongodb-newsapi.herokuapp.com/api"
});
