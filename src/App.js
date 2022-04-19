import React, { useState } from 'react';
import moment from 'moment';

import { Header, Game, Sidebar, Footer } from './components/mainLayout';

import './App.css';

function App() {
    const initialGrid = [
        8, 0, 0, 0, 2, 0, 9, 1, 0,
        2, 3, 4, 5, 1, 0, 0, 0, 7,
        7, 1, 0, 0, 8, 0, 0, 5, 4,
        6, 0, 0, 1, 0, 0, 3, 0, 5,
        1, 8, 5, 0, 0, 0, 7, 2, 0,
        0, 4, 0, 6, 0, 2, 8, 0, 0,
        0, 6, 8, 0, 0, 0, 4, 0, 0,
        0, 0, 0, 0, 0, 0, 1, 6, 2,
        0, 0, 0, 4, 0, 7, 5, 3, 0
    ];

    const emptyGrid = [
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0
    ];

    const [gameGrid, setGameGrid] = useState(initialGrid);
    const [gameDifficulty, setGameDifficulty] = useState('Easy');
    const [numberSelected, setNumberSelected] = useState(0);
    const [timeGameStarted, setTimeGameStarted] = useState(moment());

    function handleOnClickNewGame() {
        setGameGrid(emptyGrid);
        setTimeGameStarted(moment());
    }

    function handleOnClickCell(givenIndex) {
        if (numberSelected !== 0 && initialGrid[givenIndex] === 0) {
            const tempArray = gameGrid.slice();
            tempArray[givenIndex] = numberSelected;
            setGameGrid(tempArray);
        }
    }

    function handleOnClickNumber(number) {
        setNumberSelected(number);
    }

    function handleChangeGameDifficulty(e) {
        setGameDifficulty(e.target.value);
        setGameGrid(emptyGrid);
        setTimeGameStarted(moment());
    }

    return (
        <div className="container">
            <Header onClick={handleOnClickNewGame} />
            <div className="innercontainer">
                <Game
                    gameGrid={gameGrid}
                    initialGrid={initialGrid}
                    onClick={(index) => handleOnClickCell(index)}
                />
                <Sidebar
                    gameDifficulty={gameDifficulty}
                    numberSelected={numberSelected}
                    timeGameStarted={timeGameStarted}
                    onClick={(number) => handleOnClickNumber(number)}
                    onChange={(e) => handleChangeGameDifficulty(e)}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
