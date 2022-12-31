import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { checkWin } from './hangmanUtils';

const EndGame = (props) => {
    const { word, correctLetters, wrongLetters, renderNewGame } = props;
    let message = '';
    let gameOver = false;

    const handleGame = (event) => {
        event.preventDefault();
        renderNewGame();
    };

    if (checkWin(word, correctLetters, wrongLetters) === 'win') {
        message = 'Game over! You win!';
        gameOver = true;
    } else if (checkWin(word, correctLetters, wrongLetters) === 'loss') {
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
                        <Button autoFocus={true} name="nemGameButton" variant="contained" type="submit" onClick={handleGame}> New Game </Button>
                    </div>
                </div>
                : ''
            }
        </>
    );
};

export { EndGame };