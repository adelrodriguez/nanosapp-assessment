import http from 'http';
import app from '../app';
import { normalizePort } from '../utils';

// Get port from environment and store it in Express
const PORT = normalizePort(process.env.PORT || '3000');
app.set('port', PORT);

// Create the HTTP server
const server = http.createServer(app);

function onListening(): void {
  console.log('Listening to port', PORT)
}

server.listen(PORT);
server.on('listening', onListening);