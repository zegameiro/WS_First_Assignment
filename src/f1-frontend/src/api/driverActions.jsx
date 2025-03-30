import axios from "./index";

// Get drivers
export const getDrivers = (page) => {
    return axios.get(`/drivers?page=${page}`);
};