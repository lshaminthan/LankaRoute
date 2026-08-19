require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectToDatabase } = require("./configs/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 4000;

connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`LankaRoute backend listening on port ${port}`);
  });
});
