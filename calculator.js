class Calculator {
    add(a, b) {
       return a + b;
    }
   
    subtract(a, b) {
       return a - b;
    }
   
    multiply(a, b) {
       return a * b;
    }
   
    divide(a, b) {
       if (b === 0) {
         throw new Error('Cannot divide by zero');
       }
       return a / b;
    }
   
    squareRoot(a) {
       if (a < 0) {
         throw new Error('Cannot calculate square root of a negative number');
       }
       return Math.sqrt(a);
    }
   
    nthPrime(n) {
       if (n <= 0) {
         throw new Error('N must be greater than 0');
       }
   
       let primes = 0;
       let num = 2;
   
       while (primes < n) {
         if (this.isPrime(num)) {
           primes++;
         }
         num++;
       }
   
       return num - 1;
    }
   
    isPrime(num) {
       for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
         if (num % i === 0) {
           return false;
         }
       }
       return num > 1;
    }
   
    exp(a) {
       return Math.exp(a);
    }
   
    log(a) {
       if (a <= 0) {
         throw new Error('Logarithm base must be greater than 0');
       }
       return Math.log(a);
    }
   }

   const calculator = new Calculator();

   console.log('Addition:', calculator.add(2, 3));
   console.log('Subtraction:', calculator.subtract(5, 2));
   console.log('Multiplication:', calculator.multiply(4, 3));
   console.log('Division:', calculator.divide(8, 2));
   console.log('Square Root:', calculator.squareRoot(25));
   console.log('Nth Prime Number (3rd prime):', calculator.nthPrime(3));
   console.log('Exponential Function (e^2):', calculator.exp(2));
   console.log('Natural Logarithm (ln(2)):', calculator.log(2));

   
   module.exports = Calculator;
