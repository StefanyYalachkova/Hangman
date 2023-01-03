import React from "react";
import renderer from 'react-test-renderer';
import { Images } from "../src/Images";

describe('Images test', () => {
    it('renders correctly', () => {
        const wrongLetters = ['s'];

        const tree = renderer
            .create(<Images
                wrongLetters={wrongLetters}
            />);
        expect(tree).toMatchSnapshot();
    });
});
