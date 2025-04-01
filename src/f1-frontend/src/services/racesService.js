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
    },
    async getRaceId(id) {
        return await client.get(`/races/id/${id}`);
    },
    async deleteRace(raceId) {
        return await client.delete(`/races/delete`, {
            data: { raceId: raceId }
        })
    }
}

export default race_service;