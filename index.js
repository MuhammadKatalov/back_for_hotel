require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");

const PORT = 3400;
const app = express();

app.use(cors());

const router = require("./routes");
app.use(express.json());
app.use(express.urlencoded());
app.use(router);
app.use(express.static(path.resolve(__dirname, 'public')));

mongoose.connect(process.env.DB_URL).then(() => {
  app.listen(PORT, () =>
    console.log(`Server has been started, http://localhost:${PORT}`)
  );
});
