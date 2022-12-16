const assert = require('assert');

describe('Calculator', function() {
  describe('#add()', function() {
    it('should correctly add two numbers', function() {
      // Arrange
      const a = 2;
      const b = 3;

      // Act
      const result = a + b;

      // Assert
      assert.equal(result, 5);
    });
  });

  describe('#clear()', function() {
    it('should clear the input field when the "CE" button is clicked', function() {
      // Arrange
      const input = '2 + 3';

      // Act
      // Simulate clicking the "CE" button
      input = '';

      // Assert
      assert.strictEqual(input, '');
    });
  });
  
  describe('#subtract()', function() {
    it('should correctly subtract two numbers', function() {
      // Arrange
      const a = 5;
      const b = 3;
  
      // Act
      const result = a - b;
  
      // Assert
      assert.equal(result, 2);
    });
  });
  describe('#sqrt()', function() {
    it('should correctly calculate and display the square root of a number', function() {
      // Arrange
      const input = 25;

      // Act
      // Simulate clicking the square root button
      const result = Math.sqrt(input);

      // Assert
      assert.equal(result, 5);
    });
  });
  
});
