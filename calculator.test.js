const Calculator = require('./calculator');

describe('Calculator', () => {
 test('should add numbers', () => {
    const calc = new Calculator();
    expect(calc.add(1, 2)).toBe(3);
 });

 test('should subtract numbers', () => {
    const calc = new Calculator();
    expect(calc.subtract(5, 3)).toBe(2);
 });

 test('should multiply numbers', () => {
    const calc = new Calculator();
    expect(calc.multiply(2, 3)).toBe(6);
 });

 test('should divide numbers', () => {
    const calc = new Calculator();
    expect(calc.divide(6, 3)).toBe(2);
 });

 test('should calculate square root', () => {
    const calc = new Calculator();
    expect(calc.squareRoot(9)).toBe(3);
 });

 test('should find nth prime number', () => {
    const calc = new Calculator();
    expect(calc.nthPrime(3)).toBe(5);
 });

 test('should calculate exponential function', () => {
    const calc = new Calculator();
    expect(calc.exp(2)).toBe(Math.exp(2));
 });

 test('should calculate natural logarithm', () => {
    const calc = new Calculator();
    expect(calc.log(Math.E)).toBe(1);
 });
});