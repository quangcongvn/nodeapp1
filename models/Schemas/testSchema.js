var mongoose = require('mongoose')
/// CHANGE HERE --- 
var ObjName = "Test"; // table
var ObjSchema = new mongoose.Schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    name: String,
    data: String
});
/// END CHANGE ---
var Obj = mongoose.model(ObjName, ObjSchema);
module.exports = Obj; 