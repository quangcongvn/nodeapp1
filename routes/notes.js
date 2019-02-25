var notes = require('../models/notes');
exports.add = function(req, res, next) {
    res.render('noteedit', {
        title: "Add a note",
        docreate: true,
        notekey: "",
        note: undefined
    });
}