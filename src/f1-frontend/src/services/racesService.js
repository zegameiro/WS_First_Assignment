import client from "./client"

const race_service = {
    async getRaces(page){
        return await client.get(`/races?page=${page}`);
    }
}

export default race_service;