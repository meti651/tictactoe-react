import React, { useState } from "react";
import { Link } from "react-router-dom";
import { checkWin, initializeMatrix } from "../../utility/game/utilityFunctions";
import Cell from "./Cell";

export default function Board({ width, height, players }) {
    const [board, setBoard] = useState(initializeMatrix(height, width));
    const [currentPlayer, setCurrentPlayer] = useState(players[0]);
    const [isGameRunning, setIsGameRunning] = useState(true);

    const playerMove = (target) => {
        board[target.x][target.y] = currentPlayer.sign;

        const isWin = checkWin(board, target, currentPlayer.sign);

        if (isWin) {
            alert(`${currentPlayer.name} win!`);
            setIsGameRunning(false);
            return;
        }

        setCurrentPlayer(players.getNextPlayer(currentPlayer));
    };

    const restartGame = () => {
        setBoard(initializeMatrix(height, width));
        setIsGameRunning(true);
    };

    return (
        <div style={{ height: "100%" }}>
            <h1>
                {currentPlayer.name}: {currentPlayer.sign}
            </h1>
            {board &&
                board.map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} style={{ display: "flex", flexDirection: "row" }}>
                            {row.map((column, columnIndex) => {
                                return (
                                    <Cell
                                        value={column}
                                        key={`${rowIndex}_${columnIndex}`}
                                        rowIndex={rowIndex}
                                        columnIndex={columnIndex}
                                        playerMove={playerMove}
                                        playerSign={currentPlayer.sign}
                                        isGameRunning={isGameRunning}
                                        style={{
                                            height: `${90 / height}vmin`,
                                            width: `${90 / height}vmin`,
                                            fontSize: `${(90 / height) * 0.7}vmin`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            {!isGameRunning && (
                <div>
                    <button onClick={restartGame}>Restart</button>
                    <Link to="/">Quit</Link>
                </div>
            )}
        </div>
    );
}
