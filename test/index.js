var expect = require('expect.js'),
    asMs = require('../index');

describe('as-ms', function() {
  it('gives the result in ms', function() {
    expect(asMs(1, 'second')).to.equal(1000);
  });
});
