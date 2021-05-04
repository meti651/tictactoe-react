import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { checkWin, initializeMatrix } from "../../utility/game/utilityFunctions";
import Cell from "./Cell";
import * as Styles from "./Board.module.scss";

export default function Board({ width, height, players }) {
    const [board, setBoard] = useState(initializeMatrix(height, width));
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);
    const [isGameRunning, setIsGameRunning] = useState(true);

    const boardWrapper = useRef();

    const playerMove = (target) => {
        board[target.x][target.y] = currentPlayer.sign;

        const isWin = checkWin(board, target, currentPlayer.sign);

        if (isWin) {
            alert(`${currentPlayer.name} win!`);
            setIsGameRunning(false);
            for (let winCell of isWin) {
                boardWrapper.current.children[winCell.x].children[winCell.y].firstChild.style.border = "2px solid red";
            }
        }

        setCurrentPlayer(players.getNextPlayer(currentPlayer));
    };

    const restartGame = () => {
        setBoard(initializeMatrix(height, width));
        setIsGameRunning(true);
        setCurrentPlayer(players[0]);
    };

    return (
        <div id={Styles.container}>
            <div id={Styles.side_menu}>
                <h2>
                    {currentPlayer.name}: {currentPlayer.sign}
                </h2>
                <div id={Styles.menu_points}>
                    <button onClick={restartGame}>Restart</button>
                    <Link to="/">Quit</Link>
                </div>
            </div>
            <div id={Styles.board}>
                <div ref={boardWrapper} id={Styles.board_wrapper}>
                    {board &&
                        board.map((row, rowIndex) => {
                            return (
                                <div key={rowIndex} id={Styles.cells_wrapper}>
                                    {row.map((column, columnIndex) => {
                                        return (
                                            <div
                                                key={`${rowIndex}_${columnIndex}`}
                                                className={
                                                    (columnIndex + rowIndex) % 2 ? Styles.dark_cell : Styles.light_cell
                                                }
                                            >
                                                <Cell
                                                    value={column}
                                                    rowIndex={rowIndex}
                                                    columnIndex={columnIndex}
                                                    playerMove={playerMove}
                                                    playerSign={currentPlayer.sign}
                                                    isGameRunning={isGameRunning}
                                                    style={{
                                                        height: `${85 / height}vmin`,
                                                        width: `${85 / height}vmin`,
                                                        fontSize: `${(90 / height) * 0.7}vmin`,
                                                    }}
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
