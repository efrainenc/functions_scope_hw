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
    if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){// if vowel return true; else false
        return true;
    }else{
        return false;
    }
}
// console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    lengthArr = [];
    lengthArr.push(word1.length);
    lengthArr.push(word2.length);
    return lengthArr;
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum=0;// value to store the sum

    // for loop to iterate and add each variable in array
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    let prime = true; // can only be divisible by 1 and itself
    if(num > 1){
        for(let i= 2; i < num; i++){// checking if the number is divisible by a number from 2 - num^2
            if(num % i === 0){
                prime = false;
                break;
            }
        }
    } else if(num === 1)
    {
        prime = false;
    }
    return prime;
}
// console.log(checkPrime(29));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    primes = [];
    for(let i=1;i <= num; i++){// for loop to check every value up to "num" prime numbers
        if(checkPrime(i) === true){// if prime === true then push into array
            primes.push(i);// push every prime number into array;
        }
    }
    console.log(primes);
}
// printPrimes(97);

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