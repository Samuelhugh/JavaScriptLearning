// 1. Print odds 1-20, Using a loop write code that will console.log all of the odd values from 1 up to 20.

for(var i = 1; i <= 20; i++) {
    if(i % 2 == 1) {
        console.log(i);
    }
}

// 2. Decreasing Multiples of 3, Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for(var x = 100; x >= 0; x--) {
    if(x % 3 == 0) {
        console.log(x);
    }
}

// 3. Print the sequence, Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

var arr = [4, 2.5, 1, -0.5, -2, -3.5];
var y = 0;

while(y < 7) {
    console.log(arr[y]);
    y++;
}

// 4. Sigma, Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

var sum = 0;

for(var s = 1; s <= 100; s++) {
    sum += s;
    console.log(sum);
}

// 5. Factorial, Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var product = 1;
var multiply = 0;

while(multiply <= 11) {
    product *= value[multiply];
    console.log(product);
    multiply++;
}