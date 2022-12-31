import { useEffect } from 'react';
import { Images } from './Images';
import { Word } from './Word';
import { WrongLetters } from './WrongLetters';

const StartOfTheGame = (props) => {
    const { wrongLetters, word, correctLetters, setEndGamePage } = props;

    useEffect(() => {
        setEndGamePage(true);
    }, [wrongLetters, word, correctLetters]);

    return (
        <div>
            <Images
                wrongLetters={wrongLetters}
            />
            <Word
                word={word}
                correctLetters={correctLetters}
            />
            <WrongLetters
                wrongLetters={wrongLetters}
            />
        </div>
    );
};

export { StartOfTheGame };