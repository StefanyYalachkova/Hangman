import React, { useEffect, useState } from 'react';
import { ConfirmWordPage } from './ConfirmWordPage';
import { isValidWord } from './hangmanUtils';
import { StartingScreen } from './StartingScreen';
import { StartOfTheGame } from './StartOfTheGame';

const Hangman = () => {
    const [word, setWord] = useState('');
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    const [readyForPlay, setReadyForPlay] = useState(false);
    const [viewConfirmWordPage, setViewConfirmWordPage] = useState(false);
    const [viewStartGamePage, setStartGamePage] = useState(false);
    const [restartGame, setRestartGame] = useState(false);

    useEffect(() => {
        if (restartGame) {
            setWrongLetters([]);
            setCorrectLetters([]);
        };
    }, [restartGame]);

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

    const renderNewRound = () => {
        setRestartGame(true);
        setWord('');
        setStartGamePage(false);
    };

    const handleKeydown = (event) => {
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

    const renderStartGamePage = () => {
        return (
            <div>
                {viewStartGamePage
                    ? <div>
                        <StartOfTheGame
                            wrongLetters={wrongLetters}
                            word={word}
                            correctLetters={correctLetters}
                            setStartGamePage={setStartGamePage}
                            restartGame={restartGame}
                            setCorrectLetters={setCorrectLetters}
                            setWrongLetters={setWrongLetters}
                            renderNewRound={renderNewRound}
                            handleKeydown={handleKeydown}
                        />
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
                        restartGame={restartGame}
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