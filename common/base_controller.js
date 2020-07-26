const Base = require('./base');
const Joi = require('joi');

class BaseControler extends Base {

  constructor(config, req, res, logger, schema = false) {
    super(config, logger);
    this.response_data = {}
    this.response_code = 200;
    this.req = req;
    this.res = res;
    this.schema = schema;
  }

  validate_request() {
    {
      if (this.schema === false) {
        return true;
      }
      const result = this.schema[this.req.method].validate(this.req.body);
      this._debug({
        message: 'output from JOI Validation Fwk',
        result: result
      });
      if (result.error) {
        const err_msg = result.error.message;
        this.response_data = {
          err: err_msg,
          c: 'validation-check-failed'
        };
        this.response_code = 400;
        return false;
      }

    }
    return true;
  }

  async procees_request() {
    try {

      if (this.req.method === 'GET') {
        if (this.req.query) {
          this.req.body = this.req.query
        }
      }

      this._debug({
        message: 'In proceesRequest:: Processing Request',
        method: this.req.method,
        body: this.req.body,
        query: this.req.query
      });

      if (true === this.validate_request()) {
        switch (this.req.method) {
          case 'GET':
            await this.get();

            break;
          case 'POST':
            await this.post();
            break;
          case 'PUT':
            await this.post();
            break;
        }
      }
    } catch (err) {
      this.response_code = 500;
      this.response_data = err;
    }
    this.send_response();
  }

  async get() {
    this.response_code = 501;
  }

  async post() {
    this.response_code = 501;
  }

  async put() {
    this.response_code = 501;
  }

  send_response() {
    this._debug({
      message: "sending response",
      code: this.response_code,
      data: this.response_data
    });
    this.res.status(this.response_code);
    this.res.send(this.response_data);
  }
}
module.exports = BaseControler;