require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection
        .once("open", ()=> console.log("DataBase is Connected"))
        .on("error", error =>{
            console.log("Not Connected")
        });
}

module.exports = connectDB;