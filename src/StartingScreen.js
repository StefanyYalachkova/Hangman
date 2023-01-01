import { Button } from '@mui/material';
import { useEffect } from 'react';

const StartingScreen = (props) => {

    const handleNewGame = (event) => {
        event.preventDefault();
        props.onClick();
    };

    return (
        <div className="container" >
            <h1> H a n g m a n </h1>
            <Button
                autoFocus={true}
                name="nemGameButton"
                variant="contained"
                type="submit"
                onClick={handleNewGame}
            > New Game
            </Button>
        </div>
    );
};

export default StartingScreen;
