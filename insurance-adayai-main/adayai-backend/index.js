require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/database');
const jwt = require('jsonwebtoken');

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))


const corsOptions = {
    origin: ['https://insurance-frontend-adayai.vercel.app', 'http://localhost:3000'],
    credentials: true, 
    optionSuccessStatus: 200,
}


app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});


connectDB();
app.use('/api/',require('./routes/user-signup-login'))
app.use('/api/policy',require('./routes/policy-router'))
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`listening of port ${port}`)
});