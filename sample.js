/*function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0)
        return 'FizzBuzz';
    else if (number % 3 === 0)
        return 'Fizz';
    else if (number % 5 === 0)
        return 'Buzz';
    else
        return number;
}
console.log( fizzBuzz (15) );
*/

const sub = {
    mathematics: 99,
    programming: 97,
    algorithm: 90
};

const average = 
    (sub.mathematics + sub.programming + sub.algorithm) / 3;

console.log('Average: ' + average);

function grades(average) {
    if (average >= 90) 
        return 'Status: Excellent';
    else if (average >= 75) 
        return 'Status: Passed';
    else 
        return 'Status: Failed';
}

console.log ( grades (average));