const mongoose = require("mongoose");
const URI = process.env.ATLAS_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    console.log("Successfully connected to MongoDB.");
});

module.exports = db;