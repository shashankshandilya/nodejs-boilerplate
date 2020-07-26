class Base {
  constructor(config, logger) {
    this.config = config;
    this.logger = logger;
  }
  _debug(message) {
    if (this.config.env != 'test') {
      console.log(message);
    }
  }
}
module.exports = Base;