$(function(){
  'use strict';

  var PLAYGROUND_SIZE = 500;
  var TILE_SIZE = 100;

  var tileAnimation = [];

  //Tile Animations:
  tileAnimation['2']    = new $.gQ.Animation({imageURL: '../../img/num-tile-2.png', aniName:'2'});
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

  var pos = ['10','130','250','370'];

  //Init game
  $('#playground').playground({height: PLAYGROUND_SIZE, width: PLAYGROUND_SIZE, keyTracker: true});

  $.playground().addGroup('tiles',{height: PLAYGROUND_SIZE, width: PLAYGROUND_SIZE});

  $('#tiles').addSprite('tile', {animation: tileAnimation['2'], height: TILE_SIZE, width: TILE_SIZE, posx: pos[3], posy: pos[1]});

  //Game start
  $(document).ready(gameStart);
  function gameStart(){
    $.playground().startGame();
  }

  //Tile Double
  function tileUp(tile, num){
    console.log(tile);
    var block = tile;
    var n = num;
    switch(n){
      case 2048:
        $('#"+tile+"').setAnimation(tileAnimation['4096']);
        youWon();
        break;
      case 1024:
        tile.setAnimation(tileAnimation['2048']);
        break;
      case 512:
        tile.setAnimation(tileAnimation['1024']);
        break;
      case 256:
        tile.setAnimation(tileAnimation['512']);
        break;
      case 128:
        tile.setAnimation(tileAnimation['256']);
        break;
      case 64:
        tile.setAnimation(tileAnimation['128']);
        break;
      case 32:
        tile.setAnimation(tileAnimation['64']);
        break;
      case 16:
        tile.setAnimation(tileAnimation['32']);
        break;
      case 8:
        tile.setAnimation(tileAnimation['16']);
        break;
      case 4:
        tile.setAnimation(tileAnimation['8']);
        break;
      case 2:
        console.log('working');
        $('"#'+block+'"').setAnimation(tileAnimation['4']);
        break;
    }
  }

  function youWon(){
    alert('You Won The Game!');
  }

  //Keybinding
  $(document).keydown(function(e){
    switch(e.keyCode){
      case 37: // Left
      case 72: // Vim Left
      case 65: // A (WASD Left)
        left();
        break;
      case 38: // Up
      case 75: // Vim Up
      case 87: // W (WASD Up)
        up();
        break;
      case 39: // Right
      case 76: // Vim Right
      case 68: // D (WASD Right)
        right();
        break;
      case 40: // Down
      case 74: // Vim Down
      case 83: // S (WASD Down)
        down();
        break;
      case 32: // Space
        space();
        break;
    }
  });

  function space(){
    var $test = $('#tile');
    var tileselect = $test.selector;
    var testurl= $test[0].gameQuery.animation.imageURL;
    var test2 = testurl.slice(19,-4);
    tileUp(tileselect, test2);
  }

  function left(){
    var current = parseInt($('#tile').x());
    if(current-120 > 0){
      $('#tile').x(current-120,false);
    }
  }

  function up(){
    var current = parseInt($('#tile').y());
    if(current-120 > 0){
      $('#tile').y(current-120,false);
    }
  }

  function right(){
    var current = parseInt($('#tile').x());
    if(current+120 < PLAYGROUND_SIZE-TILE_SIZE){
      $('#tile').x(current+120,false);
    }
  }

  function down(){
    var current = parseInt($('#tile').y());
    if(current+120 < PLAYGROUND_SIZE-TILE_SIZE){
      $('#tile').y(current+120,false);
    }
  }

});

/*
this.Board = function(){
  var self=this;
  this.state= [['','','',''],['','','',''],['','','',''],['','','','']];
};
*/
