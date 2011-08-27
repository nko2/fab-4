
/**
 * Module dependencies.
*/
_ = require("./vendor/underscore");
var Server = {},
    express = require('express'),
    path = require("path"),
    sys = require("sys"),
    application_root = __dirname;

require.paths.push(application_root + "/lib");
require.paths.push(application_root + "/app/models");
global.Server = Server;
Server.root = application_root;
global.app = express.createServer();


// Configuration

require('./vendor/nko')('lyXvQ3xB5YL3dZv0', function(err, res) {
  if (err) {
    console.error('Error contacting Node Knockout servers:');
    console.error(err.stack);
  }
});

Server.setup = require("./lib/setup.js").setup({
  app: app,
  mongoose: require("mongoose"),
  express: express,
  paths: {
    views: path.join(application_root, "app", "views"),
    root: path.join(application_root, "public"),
    controllers: path.join(application_root, "app", "controllers"),
    models: path.join(application_root, "app", "models")
  }
});


// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Express'
  });
});

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
