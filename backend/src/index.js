import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, async () => {
      console.log(`Server listening on PORT ${process.env.PORT}`);
      await seedAdmin();
    });
  })
  .catch((err) => console.log(err));
