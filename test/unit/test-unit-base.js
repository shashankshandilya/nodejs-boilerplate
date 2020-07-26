process.env.NODE_ENV = 'test';
let chai = require('chai');
let expect = chai.expect;

const base = require('../../common/base')
const obj = new base({}, {});

describe("base class Unit Testing", () => {
  it("Test debug function", (done) => {

    // const message = {
    //   message: "Hello World"
    // };
    // obj._debug(message);

    // expect(console.log.calledOnce).to.be.true;
    // expect(console.log.calledWith(message)).to.be.true;
    done();
  });
  it("function should add two numbers", done => {
    let sum = obj._sum(8, 7);
    console.log("sum", sum);
    expect(sum).to.be.a('number');
    expect(sum).to.equal(15);
    done();
  });
});