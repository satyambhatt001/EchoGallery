import mongoose from "mongoose";
// import { DB_NAME } from "../constant.js";
import express from "express";
import dotenv from "dotenv";
dotenv.configDotenv();

const app = express();
const port = process.env.PORT;
console.log(port)

console.log(process.env.MONGODB_URI);
const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(`${process.env.MONGODB_URI}`, {
      maxPoolSize: 10,
      minPoolSize: 5,
    });
    console.log(
      "DataBase connected successfully",
      connectionDB.connection.host
    );
  } catch (error) {
    console.log("MONGODB connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
