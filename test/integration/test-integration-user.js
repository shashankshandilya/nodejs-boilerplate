process.env.NODE_ENV = 'test';
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../app');
let should = chai.should();

chai.use(chaiHttp);

describe('/POST user', () => {

  it('it should fail with bad parameter', (done) => {
    chai.request(server).post('/api/v1/user').end((err, res) => {
      res.should.have.status(400);
      done();
    });
  });

  it('it should fail if contract not followed', (done) => {
    chai.request(server).post('/api/v1/user').send({
      names: "shashank"
    }).end((err, res) => {
      res.should.have.status(400);
      done();
    });
  });

  it('it should pass with success and return valid json', (done) => {
    chai.request(server).post('/api/v1/user').send({
      name: 'shashank'
    }).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      done();
    });
  });

});