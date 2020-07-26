const express = require('express');
const port = 3000;
const body_parser = require('body-parser');
const app = express();

{
  const config = {
    "env": process.env.NODE_ENV
  };
  const logger = {};

  const routes = require('./routes')(config, logger);
  // Add middle wears
  app.use(body_parser.json());
  app.listen(port, () => {
    console.log('Server listening on ', port);
  });
  // if (config.env == "www") {
  //   process.on('uncaughtException', async function (err) {
  //     console.log({
  //       message: err.message,
  //       code: err.code,
  //       trace: err.stack,
  //       source: 'main-uncaught-exception'
  //     });
  //     process.exit(1);
  //   });
  // }
  app.use('/api/v1', routes);
}
module.exports = app;