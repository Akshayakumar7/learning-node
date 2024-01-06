const mongoose = require("mongoose");

const userSceme = new mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model("User", userSceme)