// import mongoose from "mongoose";
var mongoose = require('mongoose')

var dbName = "testDB";
// models.connect(`mongodb://localhost/${dbName}`, function (err) {
//     if (err)
//         throw err;
// });

mongoose.connect(
    `mongodb://localhost/${dbName}`,
    {
        useNewUrlParser: true
    }
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log("Connected to MongoDB database")
});

module.exports = db;