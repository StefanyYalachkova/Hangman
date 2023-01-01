import { Button, TextField } from '@mui/material';

const ConfirmWordPage = (props) => {
    const MIN_LENGTH = 3;

    const { word, setWord, isValidInput } = props;
    const shouldDisableWordButton = word.length < MIN_LENGTH;

    const handleHangmanBoard = (event) => {
        event.preventDefault();
        props.onClick();
    };

    return (
        <form autoComplete="off">
            <span id="wordField">Word:</span>
            <TextField
                autoFocus={true}
                type="password"
                inputMode="tel"
                name="word"
                placeholder='Allow only alphabets'
                value={word}
                onChange={setWord}
                helperText={isValidInput
                    ? ''
                    : <span className="errorMessage">Need at least 3 letters.</span>
                }
            />
            <Button
                disabled={shouldDisableWordButton}
                name="wordButton" variant="contained"
                type="submit" onClick={handleHangmanBoard}
            > Confirm word
            </Button>
        </form>
    );
};

export { ConfirmWordPage };
