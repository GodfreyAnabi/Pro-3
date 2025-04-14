// Function to check if number is a prime number

function checkIfPrimeNum(positiveNum) {

    let isPrime = true

    // check if number is equal to 1
    if (positiveNum === 1) {
        return console.log("1 is neither prime nor composite number")
    }

    // check if number is greater than 1
    else if (positiveNum > 1) {

        // looping through 2 to positiveNum/2
        for  (let i = 2; i <= positiveNum/2; i++) {
            if (positiveNum % i == 0) {
                isPrime = false
                break
            }
        }

        if (isPrime) {
            return console.log(`${positiveNum} is a prime number`);
        } else {
            return console.log(`${positiveNum} is not a prime number`);
        }
        
    } else {
        return console.log("The number is not a prime number")
    }

}

checkIfPrimeNum(17)