var CRUD
var schema
// REQUIRED, model = CRUD + schema
exports.initModel = function (CRUD_, schema_) {
    CRUD = CRUD_
    schema = schema_
}
// 
exports.list = async function (req, res) {
    var listItems = await CRUD.list(schema);
    res.render('sample/list', {
        title: "title",
        items: listItems
    })
}

//
exports.addView = function (req, res) {
    res.render('sample/add', {
        title: "Add a note",
    });
}
exports.addWork = async function (req, res) {
    await CRUD.add(schema, req.body);
    res.redirect('/list');
}

//
exports.updateView = async function (req, res) {
    var obj = await CRUD.find(schema, req.query._id);
    res.render('sample/update', {
        title: "update",
        item: obj
    });
}
//
exports.updateWork = async function (req, res) {
    await CRUD.update(schema, req.body);
    res.redirect('/list');
}
//
//
exports.deleteView = async function (req, res) {
    var obj = await CRUD.find(schema, req.query._id);
    // GUI 
    res.render('sample/delete', {
        title: obj ? obj.title : "",
        item: obj
    });
}
//
exports.deleteWork = async function (req, res) {
    await CRUD.delete(schema, req.body._id);
    res.redirect('/list');
}