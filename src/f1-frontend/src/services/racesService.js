import client from "./client"

const race_service = {
    async getRaces(page) {
        return await client.get(`/races?page=${page}`);
    },
    async getRacesYear(year) {
        return await client.get(`/races/${year}`);
    },
    async getRacesName(name) {
        return await client.get(`/races/name/${name}`);
    }
}

export default race_service;