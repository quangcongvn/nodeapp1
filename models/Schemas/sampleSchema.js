var mongoose = require('mongoose')
/// CHANGE HERE --- 
var ObjName = "SampleObj"; // table
var ObjSchema = new mongoose.Schema({
    //  _id: mongoose.Schema.Types.ObjectId,
    data: String,
    name: String
});
/// END CHANGE ---
var Obj = mongoose.model(ObjName, ObjSchema);
module.exports = Obj; 