const server = require('./api/server');
const connectDB = require('./database');
const { PORT } = require('./config/environment');

connectDB();

server.config([
  { setting: 'port', value: PORT },
]);

server.start();
