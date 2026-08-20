require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./configs/db");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRoutes);

const port = process.env.PORT || 4000;

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`LankaRoute backend listening on port ${port}`);
  });
});
