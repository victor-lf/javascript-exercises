const snakeCase = function(string) {
    // WTF case
    string = string.replace(/\.\./g, ' ');

    // camel case
    if (string.indexOf(' ') < 0) {
        string = string.replace(/([A-Z])/g, ' $1');
    }

    return string
        .trim()
        .toLowerCase()
        .replace(/[,\.\?]/g, '')
        .replace(/\-/g, ' ')
        .replace(/\s/g, '_');
};

module.exports = snakeCase;
