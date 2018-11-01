function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function sum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function multiply(numbers) {
    return numbers.reduce((total, num) => total * num, 1);
}

function power(x, y) {
    return Math.pow(x, y);
}

function factorial(number) {
    if (number <= 0) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
}