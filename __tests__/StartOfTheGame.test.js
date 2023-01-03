import React from "react";
import renderer from 'react-test-renderer';
import { StartOfTheGame } from "../src/StartOfTheGame";

describe('StartOfTheGame test', () => {
    it('renders correctly', () => {
        const word = '';
        const correctLetters = [];
        const wrongLetters = [];
        const renderNewRound = jest.fn();
        const setStartGamePage = jest.fn();
        const restartGame = jest.fn();
        const setCorrectLetters = jest.fn();
        const setWrongLetters = jest.fn();

        const tree = renderer
            .create(<StartOfTheGame
                wrongLetters={wrongLetters}
                word={word}
                correctLetters={correctLetters}
                setStartGamePage={setStartGamePage}
                restartGame={restartGame}
                setCorrectLetters={setCorrectLetters}
                setWrongLetters={setWrongLetters}
                renderNewRound={renderNewRound}
            />);
        expect(tree).toMatchSnapshot();
    });
});
