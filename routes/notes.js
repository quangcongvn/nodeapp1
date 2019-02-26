
// var notes = require('../models/notes');
//
exports.configure = function (params) {
    notes = params;
}
//
exports.addView = function (req, res) {
    res.render('noteedit', {
        title: "Add a note",
        docreate: true,
        notekey: "",
        note: undefined
    });
}
exports.add = async function (req, res) {
    await notes.add(req.body);
    res.redirect('/noteview?key=' + req.body.notekey);
}


exports.view = async function (req, res, next) {
    var obj = await notes.find(req.query.key);
    res.render('noteview', {
        title: obj ? obj.title : "",
        notekey: obj.notekey,
        note: obj
    });
}
//
exports.updateView = async function (req, res, next) {
    var obj = await notes.find(req.query.key);
    res.render('notes/update', {
        title: obj ? ("Edit " + obj.title) : "Add a Note",
        docreate: obj ? false : true,
        notekey: obj.notekey,
        note: obj
    });
}
//
exports.update = async function (req, res) {
    await   notes.update(req.body);
    res.redirect('/noteview?key=' + req.body.notekey);
}
//
//
exports.destroy = function (req, res, next) {
    var result_note = undefined;
    if (req.query.key) {
        notes.read(req.query.key, function (err, result_note) {
            // GUI 
            res.render('notedestroy', {
                title: result_note ? result_note.title : "",
                notekey: req.query.key,
                note: result_note
            });
        });
    }
    // res.render('notedestroy', {
    //     title: note ? note.title : "",
    //     notekey: req.query.key,
    //     note: note
    // });
}
//
exports.dodestroy = function (req, res, next) {
    notes.destroy(req.body.notekey);
    res.redirect('/');
}