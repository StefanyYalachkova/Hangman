import { useEffect, useRef } from 'react';
import { EndGame } from './EndGame';
import { Images } from './Images';
import { Word } from './Word';
import { WrongLetters } from './WrongLetters';

const StartOfTheGame = (props) => {
    const { wrongLetters, word, correctLetters, restartGame } = props;
    const { setStartGamePage, setWrongLetters, setCorrectLetters, renderNewRound, handleKeydown } = props;

    const boardRef = useRef(null)

    useEffect(() => {
        boardRef && boardRef.current && boardRef.current.focus();
    }, []);

    return (
        <div ref={boardRef}  onKeyDown={(event) => handleKeydown(event)} tabIndex={0}> 
            <Images
                wrongLetters={wrongLetters}
            />
            <Word
                word={word}
                correctLetters={correctLetters}
                restartGame={restartGame}
                setCorrectLetters={setCorrectLetters}
            />
            <WrongLetters
                wrongLetters={wrongLetters}
                restartGame={restartGame}
                setWrongLetters={setWrongLetters}
            />
            <EndGame
                word={word}
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                setStartGamePage={setStartGamePage}
                renderNewRound={renderNewRound}
            />
        </div>
    );
};

export { StartOfTheGame };