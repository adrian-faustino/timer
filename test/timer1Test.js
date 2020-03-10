const timer = require('../timer1');
const chai = require('chai');
const assert = chai.assert;

const input = process.argv;
timer(input);

describe('#timer', () => {
  it('should return undefined when no numbers are provided', () => {
    const expectedOutput = undefined;
    assert.equal(timer(), expectedOutput);
  });

  it('should ignore/skip any numbers that are negative', () => {
    const input = [1, -2, 3];
    const expectedOutput = [1, 3];
    assert.deepEqual(timer(input), expectedOutput);
  });

  it('should skip an input that is not a number', () => {
    const input = [1, 2, 'potato', 4];
    const expectedOutput = [1, 2, 4];
    assert.deepEqual(timer(input), expectedOutput);
  }); 
});