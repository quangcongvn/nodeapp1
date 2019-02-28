var ObjSchema;
/** REQUIRED 
 * CRUD will become model
*/
exports.initSchema = function (objSchema) {
    ObjSchema = objSchema;
}

exports.find = function (_id) {
    // return Obj.findOne({ notekey: key });
    return ObjSchema.findById(_id);
}
exports.list = function () {
    return ObjSchema.find().exec();
}
exports.add = function (obj) {
    var objNew = new ObjSchema();
    for (var field in ObjSchema.obj) {
        objNew[field] = obj[field];
    }
    objNew.save();
}


exports.update = function (obj) {
    ObjSchema.findByIdAndUpdate(obj._id, obj).exec()
}
exports.delete = function (_id) {
    ObjSchema.findByIdAndDelete(_id).exec()
}

