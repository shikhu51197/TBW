import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

app.use(bodyParser.json());
app.use(cors());


mongoose.connect(
  "mongodb+srv://shikha:meghasing@cluster0.tsfyez7.mongodb.net/thebrandwick?retryWrites=true&w=majority"
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

db.on("error", (err) => {
  console.error("MongoDB Atlas connection error:", err);
});



app.use("/api/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome Users , TBW backend site is Working. click <a href=${FRONTEND_URL}>here</a> to visit TBW frontend site.</h1>`
  )
});
