const express = require('express');

const middlewares = require('./middlewares');
const router = require('./routes');

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  config(settings) {
    settings.map(({ setting, value }) => this.app.set(setting, value));
  }

  middlewares() {
    this.app.use(middlewares);
  }

  routes() {
    this.app.use('/api', router);
    this.app.get('/', (req, res) => {
      res.send('test desde server');
    });
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`server ready in: http://localhost:${this.app.get('port')}`);
    });
  }
}

const server = new Server();

module.exports = server;
