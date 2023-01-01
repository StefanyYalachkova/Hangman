import { EndGame } from './EndGame';
import { Images } from './Images';
import { Word } from './Word';
import { WrongLetters } from './WrongLetters';

const StartOfTheGame = (props) => {
    const { wrongLetters, word, correctLetters, restartGame } = props;
    const { setStartGamePage, setWrongLetters, setCorrectLetters, renderNewRound } = props;

    return (
        <div>
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