module.exports.show = function (mongoose) {
    // Standard Mongoose stuff here...
    var schema = mongoose.Schema;

    mongoose.model('show', new schema({
        textValue: String
    }));

    return mongoose.model('show');
};
