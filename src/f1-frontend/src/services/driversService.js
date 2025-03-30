import client from "./client"

const driversService = {
    async getDrivers(page) {
        return await client.get(`/drivers?page=${page}`);
    },

    async getDriverById(driverId) {
        return await client.get(`/drivers/${driverId}`);
    }
}

export default driversService;