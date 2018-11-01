// Using recursion
const fibonacci = function (number) {
    if (number < 0) return 'OOPS';
    if (number < 3) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
};


// Recursion alternative (using conditional operator '?')
//const fibonacci = number => (number < 0) ? 'OOPS' :
//                            (number < 3) ? 1 :
//                            fibonacci(number - 1) + fibonacci(number - 2);


// Using for loop
//const fibonacci = function (number) {
//    if (number < 0) return 'OOPS';
//    let a = 0;
//    let b = 1;
//    for (let i = 1; i < number; i++) {
//        const temp = b;
//        b = b + a;
//        a = temp;
//    }
//    return b;
//};


module.exports = fibonacci;
