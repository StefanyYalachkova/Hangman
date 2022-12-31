import React from 'react';

const Word = (props) => {
    const { word, correctLetters } = props;

    return (
        <div className="word">
            {word.split('').map((letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter : '_'}
                    </span>
                )
            })}
        </div>
    )
};

export { Word };