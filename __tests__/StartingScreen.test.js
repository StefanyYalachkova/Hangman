import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import renderer from 'react-test-renderer';
import { StartingScreen } from "../src/StartingScreen";

describe('StartingScreen test', () => {
    it('renders correctly', () => {
        const handleConfirmWordPage = jest.fn();
        const restartGame = jest.fn();

        const tree = renderer
            .create(<StartingScreen
                onClick={handleConfirmWordPage}
                restartGame={restartGame}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('handles New Game button correctly', () => {
        const handleConfirmWordPage = jest.fn();
        const restartGame = jest.fn();

        render(<StartingScreen
            onClick={handleConfirmWordPage}
            restartGame={restartGame}
        />);
        fireEvent.click(screen.getByText('New Game'));
        expect(handleConfirmWordPage).toBeCalled();
    });
});
