var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add', function(){
   calculator.previousTotal = 4;
   calculator.add(1);
   assert.equal(calculator.runningTotal, 5);
 })

 it('should subtract', function(){
   calculator.previousTotal = 7;
   calculator.subtract(4);
   assert.equal(calculator.runningTotal, 3);
 })

 it('should multiply', function(){
     calculator.previousTotal = 3;
     calculator.multiply(5);
     assert.equal(calculator.runningTotal, 15);
 })

 it('should divide', function(){
   calculator.previousTotal = 21;
   calculator.divide(7);
   assert.equal(calculator.runningTotal, 3);
 })

 it('should concatenate multiple button clicks', function(){
   calculator.numberClick(6);
   calculator.numberClick(2);
   assert.equal(calculator.runningTotal, 62);
 })

 it('should chain multiple operations together', function(){
   calculator.numberClick(6);
   calculator.operatorClick('+');
   calculator.numberClick(2);
   calculator.operatorClick('-');
   calculator.numberClick(5);
   calculator.operatorClick('=');
   assert.equal(calculator.runningTotal, 3);
 })

 it('should clear the running total without affecting calculation',
   function(){
   calculator.numberClick(7);
   calculator.operatorClick('-');
   calculator.numberClick(5);
   calculator.clearClick();
   calculator.numberClick(2);
   calculator.operatorClick('=');
   assert.equal(calculator.runningTotal, 5);
 })

});
