import mongoose from "mongoose";
import { config } from "dotenv";


export const dbConnection = () => {
  config({ path: "./config/config.env" });
  const url = process.env.MONGO_URL
  mongoose.connect(url, {
      dbName: "HMS",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
