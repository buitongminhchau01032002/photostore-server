const express = require('express');
require('dotenv').config();
const corsConfig = require('./configs/cors');
const connectDB = require('./configs/db');
const configCloudinary = require('./configs/cloudinary');
const handleError = require('./middleware/handleError');
const route = require('./routes');

connectDB();
configCloudinary();

// app
const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(corsConfig);

// routes
app.use('/api', route);
app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});
app.use(handleError);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('App running at port: ' + PORT);
});
