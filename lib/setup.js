module.exports.setup = function(o){
  var sys = require("sys"),
  app = o.app,
  mongoose = o.mongoose,
  express = o.express;

  Server.paths = o.paths;

  global.db = mongoose.connect("mongodb://nodejitsu:da4b26fb2a01fec150807f8986f18730@staff.mongohq.com:10025/nodejitsudb556019565051");

  require("./models.js").autoload(db);
  require("./controllers.js").autoload(app);
  require("./routes.js").draw(app);

  app.configure(function(){
    app.set('view engine','jade');
    app.set('views', o.paths.views);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
  });
  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  });

  app.configure('production', function(){
    app.use(express.errorHandler()); 
  });

  app.listen(8080);
};
