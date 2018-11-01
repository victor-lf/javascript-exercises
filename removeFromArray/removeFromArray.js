const removeFromArray = function (...args) {

    /*
    for (let i = 1; i < args.length; i++) {
        if (args[0].indexOf(args[i]) != -1) {
            args[0].splice(args[0].indexOf(args[i]), 1);
        }
    }
    return args[0];
    */

    const array = args[0];
    return array.filter(val => !args.includes(val));

};

module.exports = removeFromArray;
