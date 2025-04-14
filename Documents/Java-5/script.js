// for(let i = 10; i >= 0; i--){
//     console.log(i)
// }

// fizzBuzz
// Multiples of 3 should print fizz
// Multiples of 3 should print Buzz
// Multiples of 3 and 5 should print fizzBuzz

// E. g
// let number = 100
// for(let i = 0; i <= number; i++){
//     if(i % 3 == 0 && i % 5 ==0) {
//         console.log(i, "fizzBuzz multiple of 3 and 5")
//     } else if(i % 3 == 0){
//         console.log(i, "fizz")
//     }else if(i % 5 == 0){
//         console.log(i,"buzz")
//     }
// } 


// let students = [
//     "john",
//     "peter",
//     "job",
//     "mustapha"
// ]
// for(let i = 1; i <= 20; i++) {
//     if(i % 2 == 0) {
//         continue
//         console.log("hellow world")
//     } else{
//         console.log(i,"")
//     }
// }

// let i = 0;
// while(i <= 10) {
//     if(i == 2) {
//         continue
//     } else {
//         console.log(i)
//     }
//     i++;
// }

let array = [
    8, 6, 2, 4, 11, 16, 26, 5
]
let max = 0
for(let i = 0; i < array.length; i++){
    if (max < array[i]) {
        max = array[i]
    }
}
console.log(max)