
exports.find = function (ObjSchema, _id) {
    // return Obj.findOne({ notekey: key });
    return ObjSchema.findById(_id);
}
exports.list = function (ObjSchema) {
    return ObjSchema.find().exec();
}
exports.add = function (ObjSchema, obj) {
    var objNew = new ObjSchema();
    for (var field in ObjSchema.schema.obj) {
        objNew[field] = obj[field];
    }
    objNew.save();
}


exports.update = function (ObjSchema, obj) {
    ObjSchema.findByIdAndUpdate(obj._id, obj).exec()
}
exports.delete = function (ObjSchema, _id) {
    ObjSchema.findByIdAndDelete(_id).exec()
}

