var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/// Table structure
var ObjName = "Note"; // table
var ObjSchema = new Schema({
    notekey: String,
    title: String,
    body: String
});
var Obj = mongoose.model(ObjName, ObjSchema);
/// DB connection
exports.connect = function (thedburl, callback) {
    mongoose.connect(thedburl);
}

exports.disconnect = function (callback) {
    mongoose.disconnect(callback);
}
// CRUD
// create object for function param: 
// var obj = {
//    foo: "This", 
//    bar: "works!"
// };
exports.find = function (key) {
    return Obj.findOne({ notekey: key });
}
exports.add = function (obj) {
    var objNew = new Obj();
    objNew.notekey = obj.notekey;
    objNew.title = obj.title;
    objNew.body = obj.body;
    objNew.save();
}

//# https://stackoverflow.com/questions/44751493/findoneandupdate-method-returning-before-resolving

exports.update = function (obj) {
    Obj.findOneAndUpdate({ notekey: obj.notekey }, obj).exec()
}
exports.delete = function (id) {
    Obj.findOneAndDelete({ notekey: id }).exec()
}

exports.list = function () {
  return Obj.find().exec();
}