import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 4000, () => {
            console.log(`server is listening at port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(`MongoDB connection failed. ERROR: ${error}`);
    });
