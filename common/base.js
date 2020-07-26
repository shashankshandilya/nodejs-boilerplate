class Base {
  constructor(config, logger) {
    this.config = config;
    this.logger = logger;
  }
  _debug(message) {
    console.log(message);
  }
}
module.exports = Base;