const express = require('express');

const middlewares = require('./middlewares');
const router = require('./routes');

class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  config(settings) {
    settings.map(({ setting, value }) => this.app.set(setting, value));
  }

  errorHandler() {
    this.app.use((err, req, res, next) => {
      console.log(`error: ${err.message}`);

      res.status(err.status || 400).json({ error: err.message });
      next();
    });
  }

  middlewares() {
    this.app.use(middlewares);
  }

  routes() {
    this.app.use('/api', router);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`server ready in: http://localhost:${this.app.get('port')}`);
    });
  }
}

const server = new Server();

module.exports = server;
