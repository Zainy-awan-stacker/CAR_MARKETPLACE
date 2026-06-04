import mongoose from "mongoose";
import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const DEFAULT_MONGO_URI = "mongodb://127.0.0.1:27017/car_marketplace";

export const connectDb = async () => {
  const mongoUri = process.env.MONGO_URI || DEFAULT_MONGO_URI;
  if (!process.env.MONGO_URI) {
    console.warn(
      "Warning: MONGO_URI is not set. Falling back to local MongoDB at",
      DEFAULT_MONGO_URI,
    );
  }

  try {
    const conn = await mongoose.connect(mongoUri);
    console.log(`mongodb connected on ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message || error);
    process.exit(1);
  }
};
