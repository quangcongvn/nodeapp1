
var sampleModel;
//
exports.configure = function (params) {
    sampleModel = params;
}
// 
exports.list = async function (req, res) {
    var listItems = await sampleModel.list();
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
    await sampleModel.add(req.body);
    res.redirect('/list');
}

//
exports.updateView = async function (req, res) {
    var obj = await sampleModel.find(req.query._id);
    res.render('sample/update', {
        title: "update",
        item: obj
    });
}
//
exports.updateWork = async function (req, res) {
    await sampleModel.update(req.body);
    res.redirect('/list');
}
//
//
exports.deleteView = async function (req, res) {
    var obj = await sampleModel.find(req.query._id);
    // GUI 
    res.render('sample/delete', {
        title: obj ? obj.title : "",
        item: obj
    });
} 
//
exports.deleteWork = async function (req, res) {
    await sampleModel.delete(req.body._id);
    res.redirect('/list');
}