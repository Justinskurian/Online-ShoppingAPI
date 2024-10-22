const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.mongodb_url)
    .then(()=> console.log("DB Connected"))
    .catch((error) => console.log(error))
}
module.exports = connectDB; 