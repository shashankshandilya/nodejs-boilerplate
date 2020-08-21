const BaseController = require('../../../common/base_controller');

class BlockingUser extends BaseController {
  constructor(config, req, res, logger) {
    super(config, req, res, logger, false)
  }
  async post() {
    await this.doHeavy()
    await this.doHeavy()
    this.response_data = {
      message: `welcome`
    }
  }

  async doHeavy() {
    // Counts how many 1s occurred
    return new Promise((resolve, rejects) => {
      var count = 0;

      for (var i = 0; i < 1e8; i++) {
        if (Math.round(Math.log(
          Math.sqrt(Math.abs(Math.round(Math.random() * 1000)))
        )) === 1)
          count++;
      }
      resolve(count);
    });

  }
}

module.exports = BlockingUser