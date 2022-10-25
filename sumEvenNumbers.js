/**
 * This function takes a sequence of numbers as single parameter and returns the sum of the even values of the sequence.
 * @param {*} input An array of numbers
 * @returns The sum of all the even numbers in the input array
 */
function sumEvenNumbers(input) {
    return input.filter(num => num % 2 === 0).reduce((a,b) => a + b,0)
  }