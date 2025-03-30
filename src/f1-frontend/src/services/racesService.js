import client from "./client"

const race_service = {
    async getRaces(){
        return await client.get("/races");
    }
}

export default race_service;