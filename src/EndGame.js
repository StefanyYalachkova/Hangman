import { Button } from '@mui/material';
import React, { useEffect } from 'react';

const EndGame = (props) => {
    const { word, checkWin, renderNewRound, setStartGamePage } = props;
    let message = '';
    let gameOver = false;

    const handleNewGame = (event) => {
        event.preventDefault();
        renderNewRound();
    };

    useEffect(() => {
        if (checkWin !== '') {
            setStartGamePage(true);
        };
    }, [handleNewGame]);

    if (checkWin === 'win') {
        message = 'Game over! You win!';
        gameOver = true;
    } else if (checkWin === 'loss') {
        message = `Game over! You lost! The word was: ${word}`;
        gameOver = true;
    };

    return (
        <>
            {gameOver
                ?
                <div className="winner-container">
                    <div className="winner">
                        <h2>{message}</h2>
                        <Button
                            autoFocus={true}
                            name="nemGameButton"
                            variant="contained"
                            type="submit"
                            onClick={handleNewGame}
                        > New Game
                        </Button>
                    </div>
                </div>
                : ''
            }
        </>
    );
};

export { EndGame };
