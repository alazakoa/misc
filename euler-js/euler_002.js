/*
Problem 2: Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the
previous two terms. By starting with 1 and 2, the first 10 terms will be:

                  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Find the sum of all the even-valued terms in the sequence which do not
exceed four million.
*/

function range(start, end) {
    /* returns an array starting at start and terminating at end 
     */
    var temp = [];
    for (var counter = start; counter < end; counter++) {
        temp.push(counter);
    }
    return temp;
}

function sum(array) {
    /* sums an array of numbers
     */
    total = 0;
    for (var counter = 0; counter < array.length; counter++) {
        total += array[counter];
    }
    return total;
}

function filter(f, array) {
    var temp = [];
    for (var counter = 0; counter < array.length; counter++) {
        if (f(array[counter]))
            temp.push(array[counter]);
    }
    return temp;
}

function fib_list(x) {
    var temp = [1,2]
    while ((temp[temp.length - 1] + temp[temp.length - 2]) < x)
        temp.push(temp[temp.length - 1] + temp[temp.length - 2])
    return temp;
}

console.log(sum(filter(function(x) { return x % 2 === 0; },
    fib_list(4*(10**6)))));
