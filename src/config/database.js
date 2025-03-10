const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://lakhankharade04:Wk6bMdGO0bcPxv96@namastenodejs.2mhnr.mongodb.net/devTinder");
};

module.exports = connectDB;



















