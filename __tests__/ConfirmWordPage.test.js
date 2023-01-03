import { fireEvent, render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import { ConfirmWordPage } from "../src/ConfirmWordPage";

describe('Confirm Word Page test', () => {
    it('renders correctly', () => {
        const onWordPage = jest.fn();
        const word = 'stef';
        const isValidWord = jest.fn();
        const handleStartGamePage = jest.fn();

        const tree = renderer
            .create(<ConfirmWordPage
                setWord={onWordPage}
                word={word}
                isValidInput={isValidWord('word', word)}
                onClick={handleStartGamePage}
            />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('handle confirm correctly', () => {
        const onWordPage = jest.fn();
        const word = 'stef';
        const isValidWord = jest.fn();
        const handleStartGamePage = jest.fn();

        render(<ConfirmWordPage
            setWord={onWordPage}
            word={word}
            isValidInput={isValidWord('word', word)}
            onClick={handleStartGamePage}
        />)
        fireEvent.click(screen.getByText('Confirm word'));
        expect(handleStartGamePage).toBeCalled();
    });
    it('checking disabled button', () => {
        const onWordPage = jest.fn();
        const word = 'st';
        const isValidWord = jest.fn();
        const handleStartGamePage = jest.fn();

        render(<ConfirmWordPage
            setWord={onWordPage}
            word={word}
            isValidInput={isValidWord('word', word)}
            onClick={handleStartGamePage}
        />);
        fireEvent.click(screen.getByText('Confirm word'));
        expect(handleStartGamePage).not.toBeCalled();
    });
});

