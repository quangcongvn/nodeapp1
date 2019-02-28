
var notesModel;
//
exports.configure = function (params) {
    notesModel = params;
}
// 
exports.list = async function (req, res) {
    var listNotes = await notesModel.list();
    res.render('notes/list', {
        title: "title",
        notes: listNotes
    })
}
//
exports.item = async function (req, res) {
    var obj = await notesModel.find(req.query.key);
    res.render('notes/item', {
        title: obj ? obj.title : "",
        notekey: obj.notekey,
        note: obj
    });
}
//
exports.addView = function (req, res) {
    res.render('notes/add', {
        title: "Add a note",
        docreate: true,
        notekey: "",
        note: undefined
    });
}
exports.addWork = async function (req, res) {
    await notesModel.add(req.body);
    res.redirect('/item?key=' + req.body.notekey);
}

//
exports.updateView = async function (req, res) {
    var obj = await notesModel.find(req.query.key);
    res.render('notes/update', {
        title: obj ? ("Edit " + obj.title) : "Add a Note",
        docreate: obj ? false : true,
        notekey: obj.notekey,
        note: obj
    });
}
//
exports.updateWork = async function (req, res) {
    await notesModel.update(req.body);
    res.redirect('/item?key=' + req.body.notekey);
}
//
//
exports.deleteView = async function (req, res) {
    var obj = await notesModel.find(req.query.key);
    console.log(obj);
    // GUI 
    res.render('notes/delete', {
        title: obj ? obj.title : "",
        notekey: req.query.key,
        note: obj
    });
}
//
exports.deleteWork = async function (req, res) {
    await notesModel.delete(req.body.notekey);
    res.redirect('/');
}