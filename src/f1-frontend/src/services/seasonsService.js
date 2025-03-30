import client from "./client"

const seasonsService = {
    async getSeasons(){
        return await client.get("/seasons");
    }
}

export default seasonsService;