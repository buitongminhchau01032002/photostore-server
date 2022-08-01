const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const ClientError = require('./utils/ClientError');
const ServerError = require('./utils/ServerError');

// require routes
const publicRoute = require('./routes/public');

// db
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};
connectDB();

// cloudinary
const configCloudinary = () => {
    if (typeof process.env.CLOUDINARY_URL === 'undefined') {
        console.warn('!! cloudinary config is undefined !!');
        console.warn('export CLOUDINARY_URL or set dotenv file');
    } else {
        console.log('cloudinary config:');
        console.log(cloudinary.config());
    }
};
configCloudinary();

// app
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
const PORT = process.env.PORT || 5000;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// routes
app.use('/api/public', publicRoute);

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

// Handle Internal server error
app.use((err, req, res, next) => {
    // Handle client error
    if (err instanceof ClientError) {
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }

    // Handle server error
    if (err instanceof ServerError) {
        console.log(`\x1b[31m [Interal server error]`);
        console.log(err.err);
        console.log(`\x1b[0m`);
        return res.status(err.status).json({
            success: false,
            error: {
                code: err.name,
                message: err.message,
            },
        });
    }
});

app.listen(PORT, () => {
    console.log('App running at port: ' + PORT);
});
