import './App.css';

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>
                    Sudoku
                </h1>
                <h2>
                    New Game
                </h2>
            </header>
            <div className="inner-container">
                <section className="game">
                    <table className="game-board">
                        <tbody>
                            <tr className="game-row">
                                <td className="game-cell">8</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">2</td>
                                <td className="game-cell"></td>
                                <td className="game-cell">9</td>
                                <td className="game-cell">1</td>
                                <td className="game-cell"></td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell">2</td>
                                <td className="game-cell">3</td>
                                <td className="game-cell">4</td>
                                <td className="game-cell">5</td>
                                <td className="game-cell">1</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">7</td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell">7</td>
                                <td className="game-cell">1</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">8</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">5</td>
                                <td className="game-cell">4</td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell">6</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">1</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">3</td>
                                <td className="game-cell"></td>
                                <td className="game-cell">5</td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell">1</td>
                                <td className="game-cell">8</td>
                                <td className="game-cell">5</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">7</td>
                                <td className="game-cell">2</td>
                                <td className="game-cell"></td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell"></td>
                                <td className="game-cell">4</td>
                                <td className="game-cell"></td>
                                <td className="game-cell">6</td>
                                <td className="game-cell"></td>
                                <td className="game-cell">2</td>
                                <td className="game-cell">8</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell"></td>
                                <td className="game-cell">6</td>
                                <td className="game-cell">8</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">4</td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">1</td>
                                <td className="game-cell">6</td>
                                <td className="game-cell">2</td>
                            </tr>
                            <tr className="game-row">
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell"></td>
                                <td className="game-cell">4</td>
                                <td className="game-cell"></td>
                                <td className="game-cell">7</td>
                                <td className="game-cell">5</td>
                                <td className="game-cell">3</td>
                                <td className="game-cell"></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <section className="status">
                </section>

            </div>
            <footer className="footer">
                <p>This app is amazing, trust me.</p>
            </footer>
        </div>
    );
}

export default App;
