/* const length = parseFloat(prompt("Enter the length of the rectangle:"));
const width = parseFloat(prompt("Enter the width of the rectangle:"));
const area = length * width;
console.log("The area of the rectangle is:", area); */

/* function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
    }
    console.log(calculateCircleArea(5)); // Output: 78.53981633974483
    console.log(calculateCircleArea(10));
 */




/* 
    function fun1 (num){
        return num*num;

    }
    a = fun1(2);
    console.log(a) */

/* 
    function performOperation(num1, num2, operationCallback) {
        return operationCallback(num1, num2);
        }
        function add(x, y) {
        return x + y;
        }
        function subtract(x, y) {
        return x - y;
        }
        function multiply(x, y) {
        return x * y;
        }
        function divide(x, y) {
        return x / y;
        }
        console.log(performOperation(10, 5, add)); // Output: 15
        console.log(performOperation(10, 5, subtract)); // Output: 5
        console.log(performOperation(10, 5, multiply)); // Output: 50
        console.log(performOperation(10, 5, divide)); // Output:  */


const os = require('os');
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());
console.log("Platform:", os.platform());
console.log("Number of CPU Cores:", os.cpus().length);
