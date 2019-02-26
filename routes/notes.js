
// var notes = require('../models/notes');
//
exports.configure = function (params) {
    notes = params;
}
//
exports.add = function (req, res, next) {
    res.render('noteedit', {
        title: "Add a note",
        docreate: true,
        notekey: "",
        note: undefined
    });
}
//
exports.save = function (req, res, next) {
    if (req.body.docreate === 'create') {
        notes.create(req.body.notekey,
            req.body.title,
            req.body.body);
    } else {
        notes.update(req.body.notekey,
            req.body.title,
            req.body.body);
    }
    res.redirect('/noteview?key=' + req.body.notekey);
}
//
exports.view = function (req, res, next) {
    var note = undefined;
    if (req.query.key) {
        note = notes.read(req.query.key);
    }
    res.render('noteview', {
        title: note ? note.title : "",
        notekey: req.query.key,
        note: note
    });
}
//
exports.edit = function (req, res, next) {
    var note = undefined;
    if (req.query.key) {
        note = notes.read(req.query.key);
    }
    res.render('noteedit', {
        title: note ? ("Edit " + note.title) : "Add a Note",
        docreate: note ? false : true,
        notekey: req.query.key,
        note: note
    });
}
//
exports.edit1 = async function (req, res, next) {
    // var note = undefined;
    if (req.query.key) {
      var  note = await notes.read1(req.query.key);
        console.log(note);
        res.render('noteedit', {
            title: note ? ("Edit " + note.title) : "Add a Note",
            docreate: note ? false : true,
            notekey: req.query.key,
            note: note
        });
    }
}
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