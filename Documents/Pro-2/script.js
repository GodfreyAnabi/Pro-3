// Function that receives an array of numbers as an argument
// and returns the largest number
function findMax(anArr) {
    let max = anArr[0];

    for (let i = 1; i < anArr.length; i++) {
      if (anArr[i] > max) {
        max = anArr[i];
      }
    }
    
    console.log(max); // Output: 9
}

// Sample array
let inputArr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// Calling the function
findMax(inputArr)