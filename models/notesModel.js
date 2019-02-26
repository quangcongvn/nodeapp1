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

exports.add = function (obj) {
    var objNew = new Obj();
    objNew.notekey = obj.notekey;
    objNew.title = obj.title;
    objNew.body = obj.body;
    objNew.save();
}

exports.update = function (key, title, body, callback) {
    var objFind = exports.find(key);
    objFind.notekey = obj.notekey;
    objFind.title = obj.title;
    objFind.body = obj.body;
    objFind.save();
}


exports.find =  function (key) {
    return  Obj.findOne({ notekey: key });
}

exports.destroy = function (key, callback) {
    exports.read(key, function (err, doc) {
        if (err) { if (typeof callback === "function") { callback(err); } }
        else {
            doc.remove();
            { if (typeof callback === "function") { callback(); } }
        }
    });
}

exports.titles = function (callback) {
    Obj.find().exec(function (err, docs) {
        if (err) { if (typeof callback === "function") { callback(err); } }
        else {
            if (docs) {
                var noteList = [];
                docs.forEach(function (note) {
                    noteList.push({
                        key: note.notekey,
                        title: note.title
                    });
                });
                if (typeof callback === "function") { callback(null, noteList); }

            } else {
                { if (typeof callback === "function") { callback(); } }
            }
        }
    });
}