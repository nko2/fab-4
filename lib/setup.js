var keys = require("appkeys")
module.exports.setup = function(o){
  var sys = require("sys"),
  app = o.app,
  mongoose = o.mongoose,
  express = o.express;

  Server.paths = o.paths;

  global.db = mongoose.connect("mongodb://localhost/tv");

    require("./models.js").autoload(db);
  require("./controllers.js").autoload(app);
  require("./routes.js").draw(app);

  app.configure(function(){
    app.set('view engine','jade');
    app.set('views', o.paths.views);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/../public'));
    /*app.use(auth( [
                 auth.Facebook({appId : keys.fbId, appSecret: keys.fbSecret, scope: "email", callback: "http://teste.thetvherald.nodejitsu.com/signin"})
    ]) );*/

  });
  app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  });

  app.configure('production', function(){
    app.use(express.errorHandler()); 
  });
  app.listen(8080);
}
