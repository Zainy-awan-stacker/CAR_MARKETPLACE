import mongoose from "mongoose";
import dns from "node:dns";
dns.setServers(['8.8.8.8', '1.1.1.1']);
export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected on ${conn.connection.host}`)
    } catch (error) {
        console.log('not connect to mongodb');
        process.exit(1);
    }
}