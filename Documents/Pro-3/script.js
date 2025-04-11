// Function to calculate the factorial of an integer number

function findFactorial(integerValue) {
    let result = 1
    for (i = 2; i <= integerValue; i++) {
        result *= i
    }
    return result
}

// Sample integer number
intValue = 10

// Screen display of the result
console.log(`The factorial of ${intValue} is ${findFactorial(intValue)}`)