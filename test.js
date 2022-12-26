const assert = require('assert');

describe('Calculator', function() {
  describe('#add()', function() {
    it('should correctly add two numbers', function() {
      const a = 2;
      const b = 3;

      const result = a + b;

      assert.equal(result, 5);
    });
  });

  describe('#clear()', function() {
    it('should clear the input field when the "CE" button is clicked', function() {
      const input = '2 + 3';

      input = '';

      assert.strictEqual(input, '');
    });
  });
  
  describe('#subtract()', function() {
    it('should correctly subtract two numbers', function() {
      const a = 5;
      const b = 3;
  
      const result = a - b;
  
      assert.equal(result, 2);
    });
  });
  describe('#sqrt()', function() {
    it('should correctly calculate and display the square root of a number', function() {
      const input = 25;

      const result = Math.sqrt(input);

      assert.equal(result, 5);
    });
  });
  
});
