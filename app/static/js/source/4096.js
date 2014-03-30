$(function(){
  'use strict';

  var PLAYGROUND_SIZE = 500;
  var TILE_SIZE = 100;
  var counter = 1;

  var tileAnimation = [];

  //Tile Animations:
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
  $('#playground').playground({height: PLAYGROUND_SIZE, width: PLAYGROUND_SIZE});
  $.playground().addGroup('tiles',{height: PLAYGROUND_SIZE, width: PLAYGROUND_SIZE});

  //Game start
  $(document).ready(gameStart);
  function gameStart(){
    $.playground().startGame();
    addTile();
    addTile();
  }

  //Tile Double
  function tileUp(tile, num){
    var block = tile;
    var n = parseInt(num);
    switch(true){
      case (n === 2048):
        $(block).setAnimation(tileAnimation['4096']);
        youWon();
        break;
      case (n === 1024):
        $(block).setAnimation(tileAnimation['2048']);
        break;
      case (n === 512):
        $(block).setAnimation(tileAnimation['1024']);
        break;
      case (n === 256):
        $(block).setAnimation(tileAnimation['512']);
        break;
      case (n === 128):
        $(block).setAnimation(tileAnimation['256']);
        break;
      case (n === 64):
        $(block).setAnimation(tileAnimation['128']);
        break;
      case (n === 32):
        $(block).setAnimation(tileAnimation['64']);
        break;
      case (n === 16):
        $(block).setAnimation(tileAnimation['32']);
        break;
      case (n === 8):
        $(block).setAnimation(tileAnimation['16']);
        break;
      case (n === 4):
        $(block).setAnimation(tileAnimation['8']);
        break;
      case (n === 2):
        $(block).setAnimation(tileAnimation['4']);
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

  //Tile Generation
  var pos = ['10','130','250','370'];
  var slots = [
      {posx: pos[0], posy: pos[0], empty: true},
      {posx: pos[1], posy: pos[0], empty: true},
      {posx: pos[2], posy: pos[0], empty: true},
      {posx: pos[3], posy: pos[0], empty: true},
      {posx: pos[0], posy: pos[1], empty: true},
      {posx: pos[1], posy: pos[1], empty: true},
      {posx: pos[2], posy: pos[1], empty: true},
      {posx: pos[3], posy: pos[1], empty: true},
      {posx: pos[0], posy: pos[2], empty: true},
      {posx: pos[1], posy: pos[2], empty: true},
      {posx: pos[2], posy: pos[2], empty: true},
      {posx: pos[3], posy: pos[2], empty: true},
      {posx: pos[0], posy: pos[3], empty: true},
      {posx: pos[1], posy: pos[3], empty: true},
      {posx: pos[2], posy: pos[3], empty: true},
      {posx: pos[3], posy: pos[3], empty: true}
    ];

  function addTile(){
    var n = Math.floor(Math.random()*16);
    var nstatus = slots[n].empty;
    if(nstatus === true){
      var xpos = slots[n].posx;
      var ypos = slots[n].posy;
      var name = 'tile_'+counter;
      slots[n].empty = false;
      $('#tiles').addSprite(name, {animation: tileAnimation['2'], height: TILE_SIZE, width: TILE_SIZE, posx: xpos, posy: ypos});
      $('#'+name).addClass('tile');
      slots[n].tile = '#'+name;
      counter++;
    }else{
      addTile();
    }
  }

});

/*
this.Board = function(){
  var self=this;
  this.state= [['','','',''],['','','',''],['','','',''],['','','','']];
};
*/
