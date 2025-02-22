import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import { seedAdmin } from "./utils/seedAdmin.js";
import authRouter from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

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
