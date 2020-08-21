const BaseController = require('../../../common/base_controller');

class BlockingUser extends BaseController {
  constructor(config, req, res, logger) {
    super(config, req, res, logger, false)
  }
  async post() {
    this.doHeavy()
    this.doHeavy()
    this.response_data = {
      message: `welcome`
    }
  }

  doHeavy() {
    // Counts how many 1s occurred
    var count = 0;

    for (var i = 0; i < 1e8; i++) {
      if (Math.round(Math.log(
        Math.sqrt(Math.abs(Math.round(Math.random() * 1000)))
      )) === 1)
        count++;
    }
    return count;
  }

  example() {
    const fs = require('fs');
    const data = fs.readFileSync('/file.md'); // blocks here until file is read
    And here is an equivalent asynchronous example:
    const fs = require('fs');
    fs.readFile('/file.md', (err, data) => {
      if (err) throw err;
    });

  }
}

module.exports = BlockingUser