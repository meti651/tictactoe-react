import React, { useEffect, useState } from "react";
import Cell from "./Cell";

export default function Board({
    width = 10,
    height = 10,
    players = [
        { name: "Player 1", sign: "X" },
        { name: "Player 2", sign: "O" },
    ],
}) {
    const [board, setBoard] = useState();
    const [playerNum, setPlayerNum] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(players[playerNum]);

    useEffect(() => {
        setBoard(Array.from({ length: height }, () => Array(width).fill(null))); // create the board matrix
    }, [width, height]);

    useEffect(() => {
        setCurrentPlayer((state) => players[playerNum]);
    }, [playerNum]);

    const playerMove = (target) => {
        board[target.x][target.y] = currentPlayer.sign;
        const isWin =
            checkWin(target, 0, 1) || // check column
            checkWin(target, 1, 0) || // check row
            checkWin(target, -1, 1) || // check / diagonal
            checkWin(target, -1, -1); // check \ diagonal

        if (isWin) {
            alert(`${currentPlayer.name} win!`);
        }

        nextPlayer();
    };

    const nextPlayer = () => {
        setPlayerNum((state) => {
            const newState = state + 1 < players.length ? state + 1 : 0;
            return newState;
        });
    };

    const checkWin = (startingPoint, xModifier, yModifier) => {
        let inLine = 0;
        const currentPoint = Object.assign({}, startingPoint);

        let isInBoard = currentPoint.x >= 0 && currentPoint.x < height;
        while (isInBoard && board[currentPoint.x][currentPoint.y] === currentPlayer.sign) {
            currentPoint.x += xModifier;
            currentPoint.y += yModifier;
            isInBoard = currentPoint.x >= 0 && currentPoint.x < height;
            inLine++;
        }

        currentPoint.x = startingPoint.x - xModifier;
        currentPoint.y = startingPoint.y - yModifier;

        isInBoard = currentPoint.x >= 0 && currentPoint.x < height;
        while (isInBoard && board[currentPoint.x][currentPoint.y] === currentPlayer.sign) {
            currentPoint.x -= xModifier;
            currentPoint.y -= yModifier;
            isInBoard = currentPoint.x >= 0 && currentPoint.x < height;
            inLine++;
        }

        return inLine >= 5;
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
                                        key={`${rowIndex}_${columnIndex}`}
                                        rowIndex={rowIndex}
                                        columnIndex={columnIndex}
                                        playerMove={playerMove}
                                        playerSign={currentPlayer.sign}
                                        style={{
                                            height: `${90 / height}vmin`,
                                            width: `${90 / height}vmin`,
                                            fontSize: `${60 / (90 / height)}vmin`,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
}
