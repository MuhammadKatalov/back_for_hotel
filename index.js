require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const errorMiddleware = require('./middlewares/error.middleware');

const PORT = process.env.PORT || 5000
const app = express();

app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));

const router = require('./routes')
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded());
app.use(router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

start()
