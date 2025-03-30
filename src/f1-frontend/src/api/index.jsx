import axios from 'axios';

export const apiLink = import.meta.env.VITE_API_URL;

export default axios.create({
    baseURL: apiLink,
})