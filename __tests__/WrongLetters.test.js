import React from "react";
import renderer from 'react-test-renderer';
import { WrongLetters } from "../src/WrongLetters";

describe('WrongLetters test', () => {
    it('renders correctly', () => {
        const wrongLetters = ['s'];
        const restartGame = jest.fn();
        const setWrongLetters = jest.fn();

        const tree = renderer
            .create(<WrongLetters
                wrongLetters={wrongLetters}
                restartGame={restartGame}
                setWrongLetters={setWrongLetters}
            />);
        expect(tree).toMatchSnapshot();
    });
});
