const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app= express();
app.use(express.json());

connectDB();
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send("Hello World");
});


app.listen(process.env.port, () => {
    console.log(`Server is listnening to ${process.env.port}`);
});