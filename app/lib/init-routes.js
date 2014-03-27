'use strict';

var d = require('../lib/request-debug');
var initialized = false;

module.exports = function(req, res, next){
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = require('../routes/home');
  var games = require('../routes/games');

  app.get('/', d, home.index);
  app.get('/4096', d, games.game4096);
  console.log('Routes Loaded');
  fn();
}

