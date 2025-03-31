import client from "./client"

const seasonsService = {
    async getSeasons(page){
        return await client.get(`/seasons?page=${page}`);
    },
    async getPodiumDrivers(year){
        return await client.get(`/seasons/podium/driver/${year}`)
    },
    async getPodiumConstructors(year){
        return await client.get(`/seasons/podium/constructor/${year}`)
    }
}

export default seasonsService;