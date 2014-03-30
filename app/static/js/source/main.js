/* global io:true */

(function(){

  'use strict';


  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    initializeSocketIO();
    $('#send-message').click(sendMessage);
    $('.chat-window').sidr();
    $('#message-area').focusin(pauseGameControls);
    $('#message-area').focusout(resumeGameControls);
  }

  var socket;

  function initializeSocketIO(){
    socket = io.connect('/app');
    socket.on('online', function(data){console.log(data);});
    socket.on('message', addMessage);
  }

  function addMessage(data){
    var $message = $('<div class="chat-message">');
    $message.text(data.text);
    $('#messages').prepend($message);
  }

  function sendMessage(){
    var data = {};
    data.text = $('#message-area').val();
    $('#message-area').val('');
    socket.emit('newmessage', data);
  }

  function pauseGameControls(){
  }

  function resumeGameControls(){
  }

})();

