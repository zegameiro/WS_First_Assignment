import client from "./client"

const seasonsService = {
    async getSeasons(page){
        return await client.get(`/seasons?page=${page}`);
    }
}

export default seasonsService;