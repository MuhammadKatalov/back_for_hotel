require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose.connect(process.env.MONGO_SERVER).then(() => {
    app.listen(PORT, () =>
        console.log(`Server has been started, http://localhost:${PORT}`)
    );
})




