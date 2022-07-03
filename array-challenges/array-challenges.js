// 1. Always Hungry Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    var foodItems = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodItems++
        }
    }
    if(foodItems == 0) {
        console.log("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if( arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3. Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
        // console.log(sum);
    }
    sum /= arr.length;
    // console.log(sum);
    for(var x = 0; x < arr.length; x++) {
        if(arr[x] > sum) {
            // console.log(arr[x]);
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4. Array Reverse
// Write a function that will reverse the values an array and return them.

function reverse(arr) {
    var newArr = [];
    for(var i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
        // console.log(newArr);
    }
    return newArr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// 5. Fibonacci numbers have been studied for years and appear often in nature. Write a function that will return an array of Fibonacci numbers up to a given length n. Fibonacci numbers are calculated by adding the last two values in the sequence together. So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0,1];
    for(var i = 2; i < n; i++) {
        fibArr.push(fibArr[i-1] + fibArr[i-2]);
    }
    return fibArr;
}

// Recursive Function that solves Fibonacci for n
function fibonacci(n){

    // I) Base Case
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;

    // II) Recursive Case
    // f(n) = f(n-1)+ f(n-2) => Ex: f(5) = f(4) + f(3)
    //                              f(4) = f(3) + f(2)
    //                              f(3) = f(2) + f(1) -> I know value of f(1)!
    //                              f(2) = f(1) + f(0) -> I know value of f(0) too!
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
    
}
var result = fibonacci(3)
console.log(result)
//var result = fibonacciArray(10);
//console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]