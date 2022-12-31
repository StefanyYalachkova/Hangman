import { useEffect, useState } from 'react';
import { ConfirmWordPage } from './ConfirmWordPage';
import { EndGame } from './EndGame';
import { isValidWord } from './hangmanUtils';
import StartingScreen from './StartingScreen';
import { StartOfTheGame } from './StartOfTheGame';

const Hangman = () => {
    const [word, setWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const [readyForPlay, setReadyForPlay] = useState(false);
    const [viewConfirmWordPage, setViewConfirmWordPage] = useState(false);
    const [viewStartGamePage, setStartGamePage] = useState(false);
    const [viewEndGamePage, setEndGamePage] = useState(false);
    const [restartGame, setRestartGame] = useState(false);

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event;

            if (readyForPlay && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase();

                if (word.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter]);
                    };
                } else {
                    if (!wrongLetters.includes(letter) && wrongLetters.length < 6) {
                        setWrongLetters(currentLetters => [...currentLetters, letter]);
                    };
                };
            };
        };

        window.addEventListener('keydown', handleKeydown);

        return () => window.removeEventListener('keydown', handleKeydown);

    }, [word, correctLetters, wrongLetters, readyForPlay]);

    const onWordPage = (event) => {
        const { value } = event.target;
        const regEx = /^[a-z]+$/;

        if (regEx.test(value)) {
            setWord(value);
        } else {
            setWord('');
        };
    };

    const handleConfirmWordPage = () => {
        setViewConfirmWordPage(true);
    };

    const handleStartGamePage = () => {
        setStartGamePage(true);
        setReadyForPlay(true);
    };

    const renderNewGame = () => {
        setRestartGame(true);
        setWord('');
        setCorrectLetters([]);
        setWrongLetters([]);
        setReadyForPlay(true);
        setEndGamePage(true);
    };

    const renderEndGame = () => {
        return (
            <div>
                {viewEndGamePage
                    ? <EndGame
                        word={word}
                        correctLetters={correctLetters}
                        wrongLetters={wrongLetters}
                        setReadyForPlay={setReadyForPlay}
                        renderNewGame={renderNewGame}
                        setViewConfirmWordPage={setViewConfirmWordPage}
                        setEndGamePage={setEndGamePage}
                    />
                    : ''
                }
            </div >
        );
    };

    const renderStartGamePage = () => {
        return (
            <div>
                {viewStartGamePage
                    ? <div>
                        <StartOfTheGame
                            wrongLetters={wrongLetters}
                            word={word}
                            correctLetters={correctLetters}
                            setEndGamePage={setEndGamePage}
                        />
                        {renderEndGame()}
                    </div>
                    : ''
                }
            </div>
        );
    };

    const renderConfirmWordPage = () => {
        return (
            <div>
                {viewConfirmWordPage
                    ? <ConfirmWordPage
                        setWord={onWordPage}
                        word={word}
                        isValidInput={isValidWord('word', word)}
                        onClick={handleStartGamePage}
                    />
                    : <StartingScreen
                        onClick={handleConfirmWordPage}
                    />
                }
            </div>
        );
    };

    return (
        <div>
            {viewStartGamePage
                ? renderStartGamePage()
                : renderConfirmWordPage()
            }
        </div>
    );
};

export { Hangman };
