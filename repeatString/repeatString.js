const repeatString = function(string, times) {
    if (times < 0) return 'ERROR';
    let repeatedString = '';
    for (let i = 0; i < times; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

module.exports = repeatString;
