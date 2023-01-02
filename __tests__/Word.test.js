import React from "react";
import renderer from 'react-test-renderer';
import { Word } from "../src/Word";

describe('Word test', () => {
    it('renders correctly', () => {
        const word = 'stef';
        const correctLetters = ['s'];
        const restartGame = jest.fn();
        const setCorrectLetters = jest.fn();

        const tree = renderer
            .create(<Word
                word={word}
                correctLetters={correctLetters}
                restartGame={restartGame}
                setCorrectLetters={setCorrectLetters}
            />);
        expect(tree).toMatchSnapshot();
    });
});