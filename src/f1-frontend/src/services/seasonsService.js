import client from "./client"

const seasonsService = {
    async getSeasons(page){
        return await client.get(`/seasons?page=${page}`);
    },
    async getPodiumDrivers(year){
        return await client.get(`/seasons/podium/driver/${year}`)
    }
}

export default seasonsService;