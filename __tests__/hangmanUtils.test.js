import { isValidWord, checkWin } from '../src/hangmanUtils';

describe('isValidWord', () => {
    it('checking isValidWord === true', () => {
        expect(isValidWord('word', 'ste')).toEqual(true);
    });
    it('checking isValidWord === false', () => {
        expect(isValidWord('word', 'st')).toEqual(false);
    });
});
describe('checkWin', () => {
    it('checking checkWin', () => {
        expect(checkWin('stef', [], [])).toEqual('');
    });
    it('checking checkWin = win', () => {
        expect(checkWin('win', ['w', 'i', 'n'], ['s'])).toEqual('win');
    });
    it('checking checkWin= loss', () => {
        expect(checkWin('loss', [], ['a', 'b', 'c', 'd', 'e', 'f'])).toEqual('loss');
    });
});
