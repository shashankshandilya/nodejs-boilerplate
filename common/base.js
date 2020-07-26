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
  _sum(a, b) {
    return a + b;
  }
}
module.exports = Base;