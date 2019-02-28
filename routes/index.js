var express = require('express');
var router = express.Router();
var notesModel = undefined;
exports.configure = function(params) {
    notesModel = params;
}
 
exports.index = router.get('/', function(req, res) { 
    // notesModel.list(function(err, items) {
    //     if(err) 
    //         res.render('showerror', { title: 'Notes', error: 'Could not read data'});
    //     else
    //         res.render('notes/list', { title: 'Notes', notes: items });
    // }); 
    res.render("error", { title: 'Notes', error: 'Could not read data'});
});