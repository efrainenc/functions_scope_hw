// 1.1. What is the difference between a parameter and an argument?

//Parameters are the values defined in the function when its defined
//Arguments are the values passed into the function when it is called


// 1.2. Within a function, what is the difference between return and console.log?

// Return stores/ returns value from a function
// Console.log prints a value


// 1. 3. What are the implications of the ability of a function to return a value?

// The value returned from the function can be stored and sent to be used in other variables or functions




// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num ** 3;
}
// console.log(calculateCube(3));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};