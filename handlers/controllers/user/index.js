const BaseController = require('../../../common/base_controller');
const schema = require('../../validators/user/index');

class User extends BaseController {
  constructor(config, req, res, logger) {
    super(config, req, res, logger, schema)
  }
  async post() {
    this.response_data = {
      message: `welcome ${this.req.body.name}`
    }
  }
  async get() {
    this.response_data = {
      name: this.req.body.name,
      age: 23
    }
  }
}

module.exports = User