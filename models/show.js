module.exports.show = function (mongoose) {
  var schema = mongoose.Schema;
  show_schema = new schema({
    tvdb_id: {type: Number, unique: true}
    , name: {type: String}
  });
  show_schema.statics.search = function(name, callback) {
    return this.where('name', new RegExp(name, 'i')).run(callback);
  };
  mongoose.model('show', show_schema);

  return mongoose.model('show');
};
