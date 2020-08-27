// Stores the active TCP connection object.
let connection;

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function (conn) {
  //Connect server by using the parameter value connect() passed from play.js
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  //Event Handler for user input through keyboard
  const handleUserInput = (data) => {
    if (data === 'w') {
      connection.write('Move: up');
    } else if (data === 's') {
      connection.write('Move: down');
    } else if (data === 'a') {
      connection.write('Move: left');
    } else if (data === 'd') {
      connection.write('Move: right');
    } else if (data === '\u0003') {
      process.exit();
    }
  }

  stdin.on('data', (handleUserInput));

  return stdin;
}

// Eporting the Stdin interface function to be used by play.js
module.exports = { setupInput };