const server = require('./api/server');
const { PORT } = require('./config/environment');

server.config([
  { setting: 'port', value: PORT },
]);

server.start();
