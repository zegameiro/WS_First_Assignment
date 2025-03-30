import client from "./client"

const driversService = {
    async getDrivers(){
        return await client.get("/drivers");
    }
}

export default driversService;