function palindrome(str) {

    let cleanedString = ""

    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    cleanedString = str.replace(/[\W_]/gi, '').toLowerCase()

    // Step 2. Use the following methods: split, reverse and join on the string
    reversedString = cleanedString.split('').reverse().join('')

    // Step 3. Check if cleanedString is strictly equal to reversedString and return a Boolean
    return cleanedString === reversedString

}

// Example of palindrome
newStr = "A man, a plan, a canal. Panama"

console.log(palindrome(newStr))