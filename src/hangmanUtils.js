const isValidWord = (name, value) => {
    const isValidWordLength = value.length < 1 || value.length >= 3;

    if (name === 'word') {
        return isValidWordLength;
    };
};

const checkWin = (word, correctLetters, wrongLetters) => {
    let result = 'win';

    word.split('').forEach(letter => {
        if (!correctLetters.includes(letter)) {
            result = '';
        };
    });

    if (wrongLetters.length === 6) {
        result = 'loss';
    };

    return result;
};

export { isValidWord, checkWin };
