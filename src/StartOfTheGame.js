import { useEffect, useRef } from 'react';
import { EndGame } from './EndGame';
import { checkWin } from './hangmanUtils';
import { Images } from './Images';
import { Word } from './Word';
import { WrongLetters } from './WrongLetters';

const StartOfTheGame = (props) => {
    const { wrongLetters, word, correctLetters, restartGame } = props;
    const { setStartGamePage, setWrongLetters, setCorrectLetters, renderNewRound, handleKeydown } = props;

    const boardRef = useRef(null);

    useEffect(() => {
        boardRef && boardRef.current && boardRef.current.focus();
    }, []);

    return (
        <div ref={boardRef} onKeyDown={(event) => handleKeydown(event)} tabIndex={0}> 
            <Images
                mistakes={wrongLetters}
            />
            <Word
                word={word}
                correctLetters={correctLetters}
                setCorrectLetters={setCorrectLetters}
            />
            <WrongLetters
                wrongLetters={wrongLetters}
                setWrongLetters={setWrongLetters}
            />
            <EndGame
                word={word}
                checkWin={checkWin(word, correctLetters, wrongLetters)}
                setStartGamePage={setStartGamePage}
                renderNewRound={renderNewRound}
            />
        </div>
    );
};

export { StartOfTheGame };