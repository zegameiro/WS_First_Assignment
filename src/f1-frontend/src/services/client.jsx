import axios from "axios"

console.log("url",import.meta.env.VITE_BASE_URL)
const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout:1000,
});

export default client;