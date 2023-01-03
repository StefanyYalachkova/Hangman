import React from "react";
import renderer from 'react-test-renderer';
import { EndGame } from "../src/EndGame";

describe('EndGame test', () => {
    it('renders correctly', () => {
        const word = '';
        const correctLetters = [];
        const wrongLetters = [];
        const renderNewRound = jest.fn();
        const setStartGamePage = jest.fn();

        const tree = renderer
            .create(<EndGame
                word={word}
                correctLetters={correctLetters}
                wrongLetters={wrongLetters}
                setStartGamePage={setStartGamePage}
                renderNewRound={renderNewRound}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
