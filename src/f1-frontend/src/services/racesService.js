import client from "./client"

const race_service = {
    async getRaces(page){
        return await client.get(`/races?page=${page}`);
    },
    async getRacesYear(year){
        return await client.get(`/races/${year}`);
    },
}

export default race_service;