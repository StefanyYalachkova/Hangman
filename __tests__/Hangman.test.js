import React from "react";
import renderer from 'react-test-renderer';
import { ConfirmWordPage } from "../src/ConfirmWordPage";
import { Hangman } from "../src/Hangman";
import { StartingScreen } from "../src/StartingScreen";
import { StartOfTheGame } from "../src/StartOfTheGame";

describe('Hangman test', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<Hangman />);
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly StartingScreen', () => {
        const handleConfirmWordPage = jest.fn();
        const restartGame = jest.fn();
        const tree = renderer
            .create(
                <StartingScreen
                    onClick={handleConfirmWordPage}
                    restartGame={restartGame}
                />);
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly ConfirmWordPage', () => {
        const word = 'stef';
        const onWordPage = jest.fn();
        const handleStartGamePage = jest.fn();
        const isValidWord = jest.fn();

        const tree = renderer
            .create(
                <ConfirmWordPage
                    setWord={onWordPage}
                    word={word}
                    isValidInput={isValidWord('word', word)}
                    onClick={handleStartGamePage}
                />);
        expect(tree).toMatchSnapshot();
    });
    it('renders correctly StartOfTheGame', () => {
        const word = '';
        const correctLetters = [];
        const wrongLetters = [];
        const renderNewRound = jest.fn();
        const setStartGamePage = jest.fn();
        const restartGame = jest.fn();
        const setCorrectLetters = jest.fn();
        const setWrongLetters = jest.fn();

        const tree = renderer
            .create(
                <StartOfTheGame
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
