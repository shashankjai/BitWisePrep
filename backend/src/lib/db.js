import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error("DB_URL is not defined");
    }

    const conn = await mongoose.connect(ENV.DB_URL, {
      autoIndex: true,
    });

    console.log(`✅ MongoDB connected : ${conn.connection.host}`);
  } catch (err) {
    console.error(`❌ Error connecting to MongoDB : ${err.message}`);
    process.exit(1);
  }
};
