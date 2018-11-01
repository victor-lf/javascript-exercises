function translate(string) {
    return string
        .split(' ')
        .map(word => {
            const index = firstVowelIndex(word);
            return word.slice(index) +
                    word.slice(0, index) + 'ay';
        })
        .join(' ');
}

function firstVowelIndex(string) {
    if (string.match(/^.?qu/g)) {
        return string.search('qu') + 2;
    }
    return string.search(/[aeiou]/);
}

module.exports = {
    translate
};
