const BaseController = require('../../../common/base_controller');
const schema = require('../../validators/user/index');

class User extends BaseController {
  constructor(config, req, res, logger) {
    super(config, req, res, logger, schema)
  }
  async post() {
    try {
      this.response_data = {
        message: `welcome ${this.req.body.name}`
      }
    } catch (error) {
      this.response_code = 400;
      this.response_data = {
        err: err
      }
    }
  }
}

module.exports = User