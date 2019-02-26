var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dburl = undefined;
exports.connect = function (thedburl, callback) {
    dburl = thedburl;
    mongoose.connect(dburl);
}

exports.disconnect = function (callback) {
    mongoose.disconnect(callback);
}

var NoteSchema = new Schema({
    notekey: String,
    title: String,
    body: String
});

mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note');

exports.create = function (key, title, body, callback) {
    var newNote = new Note();
    newNote.notekey = key;
    newNote.title = title;
    newNote.body = body;
    newNote.save(function (err) {
        if (err) {
            if (typeof callback === "function") { callback(err); }
        }
        else {
            if (typeof callback === "function") { callback(); }
        }
    });
}

exports.update = function (key, title, body, callback) {
    exports.read(key, function (err, doc) {
        if (err) { if (typeof callback === "function") { callback(err); } }
        else {
            doc.notekey = key;
            doc.title = title;
            doc.body = body;
            doc.save(function (err) {
                if (err) {
                    if (typeof callback === "function") { callback(err); }
                }
                else {
                    if (typeof callback === "function") { callback(); }
                }
            });
        }
    });
}

exports.read = function (key, callback) {
    console.log(callback); 
    Note.findOne({ notekey: key }, function (err, result) {
        if (err) {
            if (typeof callback === "function") { callback(err); }
        }
        else {
            if (typeof callback === "function") {
                callback(null, result);
            }
        }

    });
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
    Note.find().exec(function (err, docs) {
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