import client from "./client"

const driversService = {
    async getDrivers(page) {
        return await client.get(`/drivers?page=${page}`);
    }
}

export default driversService;