$(function(){
  'use strict';

  var PLAYGROUND_SIZE = 500;
  var TILE_SIZE = 100;

  var tileAnimation = [];

  // TIle Animations:
  tileAnimation['2']    = new $.gQ.Animation({imageURL: '../../img/num-tile-2.png'});
  tileAnimation['4']    = new $.gQ.Animation({imageURL: '../../img/num-tile-4.png'});
  tileAnimation['8']    = new $.gQ.Animation({imageURL: '../../img/num-tile-8.png'});
  tileAnimation['16']   = new $.gQ.Animation({imageURL: '../../img/num-tile-16.png'});
  tileAnimation['32']   = new $.gQ.Animation({imageURL: '../../img/num-tile-32.png'});
  tileAnimation['64']   = new $.gQ.Animation({imageURL: '../../img/num-tile-64.png'});
  tileAnimation['128']  = new $.gQ.Animation({imageURL: '../../img/num-tile-128.png'});
  tileAnimation['256']  = new $.gQ.Animation({imageURL: '../../img/num-tile-256.png'});
  tileAnimation['512']  = new $.gQ.Animation({imageURL: '../../img/num-tile-512.png'});
  tileAnimation['1024'] = new $.gQ.Animation({imageURL: '../../img/num-tile-1024.png'});
  tileAnimation['2048'] = new $.gQ.Animation({imageURL: '../../img/num-tile-2048.png'});
  tileAnimation['4096'] = new $.gQ.Animation({imageURL: '../../img/num-tile-4096.png'});

  //Init game
  $('#playground').playground({height: PLAYGROUND_SIZE, width: PLAYGROUND_SIZE, keyTracker: true});

  $.playground().addGroup('tiles',{height: PLAYGROUND_SIZE, width: PLAYGROUND_SIZE});

  $('#tiles').addSprite('tile', {animation: tileAnimation['2'], height: TILE_SIZE, width: TILE_SIZE});

  //Game start
  $(document).ready(gameStart);
  function gameStart(){
    $.playground().startGame();
  }

  //Keybinding
  $(document).keydown = function(e){
    switch (e.keyCode){
      case 37:
        left();
        $('#tile').setAnimation(tileAnimation['4']);
        break;
      case 38:
        up();
        break;
    }
  };

  function left(){
    alert('left arrow');
  }

  function up(){
    alert('up arrow');
  }

});

/*
this.Board = function(){
  var self=this;
  this.state= [['','','',''],['','','',''],['','','',''],['','','','']];
};
*/
