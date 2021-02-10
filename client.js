const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', function(){
   console.log("Successfully connected to game server");
   conn.write("Name: JMP");
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}

module.exports = connect;