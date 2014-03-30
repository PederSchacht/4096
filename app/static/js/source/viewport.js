'use strict';

$(document).ready(function(){
  resizeSidr();
});

window.onresize = function(event) {
  resizeSidr();
};

function resizeSidr(){
  var upperheight = ($(window).height()) * (0.7);
  $('#messages').css({'height': upperheight});
  var lowerheight = ($(window).height()) * (0.15);
  $('#message-area').css({'height': lowerheight});
}

