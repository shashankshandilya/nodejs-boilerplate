const base_validator = require(process.cwd() + '/common/base_validator');
const User = {
  GET: base_validator.user_creation,
  POST: base_validator.user_creation
}

module.exports = User