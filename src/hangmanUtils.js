const isValidWord = (name, value) => {
    const isValidWordLength = value.length < 1 || value.length >= 3;

    if(name === 'word') {
        return isValidWordLength;
    };
};

export { isValidWord };
