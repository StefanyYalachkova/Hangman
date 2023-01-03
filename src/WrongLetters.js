import React from 'react';

const WrongLetters = (props) => {
    const { wrongLetters } = props;

    return (
        <div className="wrongLetters">
            <div>
                {wrongLetters.length > 0 &&
                    <p>Wrong</p>
                }
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)
                }
            </div>
        </div>
    );
};

export { WrongLetters }; 
