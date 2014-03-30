'use strict';

exports.connection = function(socket){
  socket.emit('online', {date: new Date()});
  socket.on('newmessage', messageReceived);
};

function messageReceived(data){
  var socket = this;

  socket.emit('message', data);
  socket.broadcast.emit('message', data);
}

