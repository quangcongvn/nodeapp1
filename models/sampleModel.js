var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/// Table structure
var ObjName = "SampleObj"; // table
var ObjSchema = new Schema({
    name: String,
    data: String
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
exports.find = function (_id) {
    // return Obj.findOne({ notekey: key });
    return Obj.findById(_id);
}
exports.list = function () {
    return Obj.find().exec();
}
exports.add = function (obj) {
    var objNew = new Obj();
    for (var field in ObjSchema.obj) {
        objNew[field] = obj[field];
    }
    objNew.save();
}


exports.update = function (obj) {
    Obj.findByIdAndUpdate(obj._id, obj).exec()
}
exports.delete = function (_id) {
    Obj.findByIdAndDelete(_id).exec()
}

