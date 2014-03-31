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
      //case 72: // Vim Left
      //case 65: // A (WASD Left)
        left();
        addTile();
        break;
      case 38: // Up
      //case 75: // Vim Up
      //case 87: // W (WASD Up)
        up();
        addTile();
        break;
      case 39: // Right
      //case 76: // Vim Right
      //case 68: // D (WASD Right)
        right();
        addTile();
        break;
      case 40: // Down
      //case 74: // Vim Down
      //case 83: // S (WASD Down)
        down();
        addTile();
        break;
    }
  });

  function left(){
    for(var i=0;i<slots.length;i++){
      if(slots[i].empty === false){
        var sub = slots[i].subnum;
        var z = i - sub;
        for(z;z<i;z++){
          if(slots[z].empty === true){
            var current = parseInt($(slots[i].tile).x());
            var newloc = slots[z].posx;
            $(slots[i].tile).x(current+(newloc-current),false);
            slots[i].empty = true;
            slots[z].empty = false;
            slots[z].tile = slots[i].tile;
            delete slots[i].tile;
            break;
          }else{
            var tile1 = ($(slots[z].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            var tile2 = ($(slots[i].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            if(tile1 === tile2){
              var tileselect = $(slots[z].tile).selector;
              tileUp(tileselect, tile1);
              slots[i].empty = true;
              $(slots[i].tile).remove();
              delete slots[i].tile;
              break;
            }
          }
        }
      }
    }
  }

  function right(){
    slots = slots.reverse();
    for(var i=0;i<slots.length;i++){
      if(slots[i].empty === false){
        var add = slots[i].addnum;
        var z = i - add;
        for(z;z<i;z++){
          if(slots[z].empty === true){
            var current = parseInt($(slots[i].tile).x());
            var newloc = slots[z].posx;
            $(slots[i].tile).x(current+(newloc-current),false);
            slots[i].empty = true;
            slots[z].empty = false;
            slots[z].tile = slots[i].tile;
            delete slots[i].tile;
            break;
          }else{
            var tile1 = ($(slots[z].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            var tile2 = ($(slots[i].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            if(tile1 === tile2){
              var tileselect = $(slots[z].tile).selector;
              tileUp(tileselect, tile1);
              slots[i].empty = true;
              $(slots[i].tile).remove();
              delete slots[i].tile;
              break;
            }
          }
        }
      }
    }
    slots = slots.reverse();
  }

  function up(){
    slotsUp();
    for(var i=0;i<slots.length;i++){
      if(slots[i].empty === false){
        var upn = slots[i].upnum;
        var z = i - upn;
        for(z;z<i;z++){
          if(slots[z].empty === true){
            var current = parseInt($(slots[i].tile).y());
            var newloc = slots[z].posy;
            $(slots[i].tile).y(current+(newloc-current),false);
            slots[i].empty = true;
            slots[z].empty = false;
            slots[z].tile = slots[i].tile;
            delete slots[i].tile;
            break;
          }else{
            var tile1 = ($(slots[z].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            var tile2 = ($(slots[i].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            if(tile1 === tile2){
              var tileselect = $(slots[z].tile).selector;
              tileUp(tileselect, tile1);
              slots[i].empty = true;
              $(slots[i].tile).remove();
              delete slots[i].tile;
              break;
            }
          }
        }
      }
    }
    reverseSlotsUp();
  }

  function down(){
    slotsUp();
    slots = slots.reverse();
    for(var i=0;i<slots.length;i++){
      if(slots[i].empty === false){
        var downn = slots[i].downnum;
        var z = i - downn;
        for(z;z<i;z++){
          if(slots[z].empty === true){
            var current = parseInt($(slots[i].tile).y());
            var newloc = slots[z].posy;
            $(slots[i].tile).y(current+(newloc-current),false);
            slots[i].empty = true;
            slots[z].empty = false;
            slots[z].tile = slots[i].tile;
            delete slots[i].tile;
            break;
          }else{
            var tile1 = ($(slots[z].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            var tile2 = ($(slots[i].tile)[0].gameQuery.animation.imageURL).slice(19, -4);
            if(tile1 === tile2){
              var tileselect = $(slots[z].tile).selector;
              tileUp(tileselect, tile1);
              slots[i].empty = true;
              $(slots[i].tile).remove();
              delete slots[i].tile;
              break;
            }
          }
        }
      }
    }
    slots = slots.reverse();
    reverseSlotsUp();
  }

  //Tile Generation
  var pos = ['10','130','250','370'];
  var slots = [
      {posx: pos[0], posy: pos[0], empty: true, subnum: 0, addnum: 3, upnum:0, downnum: 3},
      {posx: pos[1], posy: pos[0], empty: true, subnum: 1, addnum: 2, upnum:0, downnum: 3},
      {posx: pos[2], posy: pos[0], empty: true, subnum: 2, addnum: 1, upnum:0, downnum: 3},
      {posx: pos[3], posy: pos[0], empty: true, subnum: 3, addnum: 0, upnum:0, downnum: 3},
      {posx: pos[0], posy: pos[1], empty: true, subnum: 0, addnum: 3, upnum:1, downnum: 2},
      {posx: pos[1], posy: pos[1], empty: true, subnum: 1, addnum: 2, upnum:1, downnum: 2},
      {posx: pos[2], posy: pos[1], empty: true, subnum: 2, addnum: 1, upnum:1, downnum: 2},
      {posx: pos[3], posy: pos[1], empty: true, subnum: 3, addnum: 0, upnum:1, downnum: 2},
      {posx: pos[0], posy: pos[2], empty: true, subnum: 0, addnum: 3, upnum:2, downnum: 1},
      {posx: pos[1], posy: pos[2], empty: true, subnum: 1, addnum: 2, upnum:2, downnum: 1},
      {posx: pos[2], posy: pos[2], empty: true, subnum: 2, addnum: 1, upnum:2, downnum: 1},
      {posx: pos[3], posy: pos[2], empty: true, subnum: 3, addnum: 0, upnum:2, downnum: 1},
      {posx: pos[0], posy: pos[3], empty: true, subnum: 0, addnum: 3, upnum:3, downnum: 0},
      {posx: pos[1], posy: pos[3], empty: true, subnum: 1, addnum: 2, upnum:3, downnum: 0},
      {posx: pos[2], posy: pos[3], empty: true, subnum: 2, addnum: 1, upnum:3, downnum: 0},
      {posx: pos[3], posy: pos[3], empty: true, subnum: 3, addnum: 0, upnum:3, downnum: 0}
    ];

  function slotsUp(){
    var column1 = [];
    var column2 = [];
    var column3 = [];
    var column4 = [];
    for(var i=0;i<slots.length;i++){
      switch(true){
        case (slots[i].posx === '10'):
          column1.push(slots[i]);
          break;
        case (slots[i].posx === '130'):
          column2.push(slots[i]);
          break;
        case (slots[i].posx === '250'):
          column3.push(slots[i]);
          break;
        case (slots[i].posx === '370'):
          column4.push(slots[i]);
          break;
      }
    }
    slots = column1.concat(column2, column3, column4);
  }

  function reverseSlotsUp(){
    var column1 = [];
    var column2 = [];
    var column3 = [];
    var column4 = [];
    for(var i=0;i<slots.length;i++){
      switch(true){
        case (slots[i].posy === '10'):
          column1.push(slots[i]);
          break;
        case (slots[i].posy === '130'):
          column2.push(slots[i]);
          break;
        case (slots[i].posy === '250'):
          column3.push(slots[i]);
          break;
        case (slots[i].posy === '370'):
          column4.push(slots[i]);
          break;
      }
    }
    slots = column1.concat(column2, column3, column4);
  }

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

