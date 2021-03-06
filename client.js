const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  //Handle messages from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //Connect function to send server the snake initial 
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: VGL');
  });
  return conn;
}

module.exports = { connect };