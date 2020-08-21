process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

describe("check for unimplemented Urls", () => {
  it("check unimplemented GET call", done => {
    chai.request(server).get('/api/v1/404').end((err, res) => {
      expect(res).to.have.status(404);
      done();
    });
  });
});