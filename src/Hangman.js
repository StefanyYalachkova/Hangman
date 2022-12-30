import { useState } from 'react';
import { ConfirmWordPage } from './ConfirmWordPage';
import { isValidWord } from './hangmanUtils';
import StartingScreen from './StartingScreen';
import { StartOfTheGame } from './StartOfTheGame';

const Hangman = () => {
    const [word, setWord] = useState('');
    const [viewConfirmWordPage, setViewConfirmWordPage] = useState(false);
    const [viewStartGamePage, setStartGamePage] = useState(false);

    const onWordPage = (event) => {
        const { name, value } = event.target;
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
    };

    const renderStartGamePage = () => {
        return (
            <div>
                {viewStartGamePage
                    ? <StartOfTheGame
                        word={word}
                    />
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
