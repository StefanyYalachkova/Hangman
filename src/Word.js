import React, { useEffect } from 'react';

const Word = (props) => {
    const { word, correctLetters, restartGame, setCorrectLetters } = props;

    useEffect(() => {
        if (restartGame) {
            setCorrectLetters([]);
        };
    }, [restartGame]);

    return (
        <div className="word">
            {word.split('').map((letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter : '_'}
                    </span>
                );
            })}
        </div>
    )
};

export { Word };