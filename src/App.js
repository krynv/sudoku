import React, { useState } from 'react';
import moment from 'moment';

import { Header, Game, Sidebar, Footer } from './components/gameLayout';
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

    // const emptyGrid = [
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0,
    //     0, 0, 0, 0, 0, 0, 0, 0, 0
    // ];

    const solvedGrid = [
        8, 5, 6, 7, 2, 4, 9, 1, 3,
        2, 3, 4, 5, 1, 9, 6, 8, 7,
        7, 1, 9, 3, 8, 6, 2, 5, 4,
        6, 9, 2, 1, 7, 8, 3, 4, 5,
        1, 8, 5, 9, 4, 3, 7, 2, 6,
        3, 4, 7, 6, 5, 2, 8, 9, 1,
        5, 6, 8, 2, 3, 1, 4, 7, 9,
        4, 7, 3, 8, 9, 5, 1, 6, 2,
        9, 2, 1, 4, 6, 7, 5, 3, 8
    ];

    const [gameGrid, setGameGrid] = useState(initialGrid);
    const [gameDifficulty, setGameDifficulty] = useState('Easy');
    const [numberSelected, setNumberSelected] = useState(0);
    const [timeGameStarted, setTimeGameStarted] = useState(moment());
    const [mistakesMode, setMistakesMode] = useState(false);
    const [fastMode, setFastMode] = useState(false);
    const [cellSelected, setCellSelected] = useState(-1);
    const [history, setHistory] = useState([]);

    function _createNewGame() {
        setGameGrid(initialGrid);
        setNumberSelected(0);
        setTimeGameStarted(moment());
        setCellSelected(-1);
        setHistory([]);
    }

    function _populateCell(givenIndex, givenValue) {
        if (initialGrid[givenIndex] === 0) {
            const tempGrid = gameGrid.slice();
            const tempHistory = history.slice();

            tempHistory.push(gameGrid.slice());
            setHistory(tempHistory);

            tempGrid[givenIndex] = givenValue;
            setGameGrid(tempGrid);
        }
    }

    function _userPopulateCell(index, value) {
        if (mistakesMode) {
            if (value === solvedGrid[index]) {
                _populateCell(index, value);
            }
            else {
                // need to allow mistakes to be made in 'mistake mode'
            }
        } else {
            _populateCell(index, value);
        }
    }

    function handleOnClickNewGame() {
        _createNewGame();
    }

    function handleOnClickCell(indexOfArray) {
        if (fastMode && numberSelected !== 0) {
            _userPopulateCell(indexOfArray, numberSelected);
        }
        setCellSelected(indexOfArray);
    }

    function handleChangeGameDifficulty(e) {
        setGameDifficulty(e.target.value);
        _createNewGame();
    }

    function handleOnClickNumber(number) {
        if (fastMode) {
            setNumberSelected(number)
        } else if (cellSelected !== -1) {
            _userPopulateCell(cellSelected, number);
        }
    }

    function handleOnClickUndo() {
        if (history.length) {
            const tempHistory = history.slice();
            const tempGrid = tempHistory.pop();
            setHistory(tempHistory);
            setGameGrid(tempGrid);
        }
    }

    function handleOnClickErase() {
        if (cellSelected !== -1 && gameGrid[cellSelected] !== 0) {
            _populateCell(cellSelected, 0);
        }
    }

    function handleOnClickHint() {
        if (cellSelected !== -1) {
            _populateCell(cellSelected, solvedGrid[cellSelected]);
        }
    }

    function handleOnClickMistakesMode() {
        setMistakesMode(!mistakesMode);
    }

    function handleOnClickFastMode() {
        if (fastMode) {
            setNumberSelected(0);
        }
        setCellSelected(-1);
        setFastMode(!fastMode);
    }

    return (
        <div className="container">
            <Header onClick={handleOnClickNewGame} />
            <div className="innercontainer">
                <Game
                    gameGrid={gameGrid}
                    initialGrid={initialGrid}
                    fastMode={fastMode}
                    numberSelected={numberSelected}
                    cellSelected={cellSelected}
                    onClick={(index) => handleOnClickCell(index)}
                />
                <Sidebar
                    gameDifficulty={gameDifficulty}
                    numberSelected={numberSelected}
                    timeGameStarted={timeGameStarted}
                    onClick={(number) => handleOnClickNumber(number)}
                    onChange={(e) => handleChangeGameDifficulty(e)}
                    onClickUndo={handleOnClickUndo}
                    onClickErase={handleOnClickErase}
                    onClickHint={handleOnClickHint}
                    onClickMistakesMode={handleOnClickMistakesMode}
                    onClickFastMode={handleOnClickFastMode}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
