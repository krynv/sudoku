export const Game = (props) => {
    const rows = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // this is also very messy, need to refactor
    function _isCellRelatedToSelectedCell(row, column) {
        if (props.cellSelected === row * 9 + column) {
            return true;
        }

        const rowOfSelectedCell = Math.floor(props.cellSelected / 9);
        const columnOfSelectedCell = props.cellSelected % 9;

        if (rowOfSelectedCell === row || columnOfSelectedCell === column) {
            return true;
        }

        return [
            [0, 3, 0, 3],
            [0, 3, 3, 6],
            [0, 3, 6, 9],
            [3, 6, 0, 3],
            [3, 6, 3, 6],
            [3, 6, 6, 9],
            [6, 9, 0, 3],
            [6, 9, 3, 6],
            [6, 9, 6, 9]
        ].some((array) => {
            if (rowOfSelectedCell > array[0] - 1 && row > array[0] - 1 &&
                rowOfSelectedCell < array[1] && row < array[1] &&
                columnOfSelectedCell > array[2] - 1 && column > array[2] - 1 &&
                columnOfSelectedCell < array[3] && column < array[3])
                return true;
            return false;
        });
    }

    function _isCellSameAsSelectedCell(givenRow, givenColumn) {
        if (props.fastMode) {
            if (props.numberSelected === props.gameGrid[givenRow * 9 + givenColumn]) {
                return true;
            }
            return false;
        } else {
            if (props.cellSelected === givenRow * 9 + givenColumn) {
                return true;
            }
            if (props.gameGrid[props.cellSelected] === 0) {
                return false;
            }
            if (props.gameGrid[props.cellSelected] === props.gameGrid[givenRow * 9 + givenColumn]) {
                return true;
            }
        }
    }

    function _selectedCell(givenIndex, givenValue) {
        if (givenValue !== 0) {
            if (props.initialGrid[givenIndex] === 0) {
                return (
                    <td
                        className="game__cell game__cell--userfilled game__cell--selected"
                        key={givenIndex}
                        onClick={() => props.onClick(givenIndex)}>
                        {givenValue}
                    </td>
                )
            } else {
                return (
                    <td
                        className="game__cell game__cell--filled game__cell--selected"
                        key={givenIndex}
                        onClick={() => props.onClick(givenIndex)}>
                        {givenValue}
                    </td>
                )
            }
        } else {
            return (
                <td
                    className="game__cell game__cell--selected"
                    key={givenIndex}
                    onClick={() => props.onClick(givenIndex)}>
                    {givenValue}
                </td>
            )
        }
    }

    function _unselectedCell(givenIndex, value) {
        if (value !== 0) {
            if (props.initialGrid[givenIndex] === 0) {
                return (
                    <td className="game__cell game__cell--userfilled" key={givenIndex} onClick={() => props.onClick(givenIndex)}>{value}</td>
                )
            } else {
                return (
                    <td className="game__cell game__cell--filled" key={givenIndex} onClick={() => props.onClick(givenIndex)}>{value}</td>
                )
            }
        } else {
            return (
                <td className="game__cell" key={givenIndex} onClick={() => props.onClick(givenIndex)}>{value}</td>
            )
        }
    }

    return (
        <section className="game">
            <table className="game__board">
                <tbody>
                    {
                        rows.map((row) => {
                            return (
                                <tr className="game__row" key={row}>
                                    {
                                        rows.map((column) => {
                                            const indexOfArray = row * 9 + column;
                                            const value = props.gameGrid[indexOfArray];

                                            if (props.cellSelected === indexOfArray) {
                                                if (value !== 0) {
                                                    if (props.initialGrid[indexOfArray] === 0) {
                                                        return (
                                                            <td className="game__cell game__cell--userfilled game__cell--highlightselected" key={indexOfArray} onClick={() => props.onClick(indexOfArray)}>{value}</td>
                                                        )
                                                    } else {
                                                        return (
                                                            <td className="game__cell game__cell--filled game__cell--highlightselected" key={indexOfArray} onClick={() => props.onClick(indexOfArray)}>{value}</td>
                                                        )
                                                    }
                                                } else {
                                                    return (
                                                        <td className="game__cell game__cell--highlightselected" key={indexOfArray} onClick={() => props.onClick(indexOfArray)}>{value}</td>
                                                    )
                                                }
                                            }

                                            if (props.fastMode) {
                                                if (props.numberSelected !== 0 && _isCellSameAsSelectedCell(row, column)) {
                                                    return _selectedCell(indexOfArray, value);
                                                } else {
                                                    return _unselectedCell(indexOfArray, value);
                                                }
                                            } else {
                                                if (props.cellSelected !== -1 && _isCellSameAsSelectedCell(row, column)) {
                                                    return _selectedCell(indexOfArray, value);
                                                } else {
                                                    return _unselectedCell(indexOfArray, value);
                                                }
                                            }
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}