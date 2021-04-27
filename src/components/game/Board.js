import React, { useEffect, useState } from "react";
import Cell from "./Cell";

export default function Board({ width = 10, height = 10 }) {
    const [board, setBoard] = useState();

    useEffect(() => {
        setBoard(Array.from({ length: height }, () => Array(width).fill(null)));
    }, [width, height]);

    const playerMove = (target) => {
        const x = target.x;
        const y = target.y;
        board[x][y] = 1;
        if (checkWin({ x: x, y: y })) {
            alert("You win!");
        }
    };

    const checkWin = (startingPoint) => {
        let inline = 1;
        const leftSign = { x: startingPoint.x, y: startingPoint.y - 1 };
        while (board[leftSign.x][leftSign.y]) {
            leftSign.y -= 1;
            inline++;
        }
        const rightSign = { x: startingPoint.x, y: startingPoint.y + 1 };
        while (board[rightSign.x][rightSign.y]) {
            rightSign.y += 1;
            inline++;
        }

        if (inline >= 5) {
            return true;
        }
        inline = 1;
        const upSign = { x: startingPoint.x - 1, y: startingPoint.y };
        if (upSign.x >= 0) {
            while (board[upSign.x][upSign.y]) {
                upSign.x -= 1;
                inline++;
            }
        }

        const downSign = { x: startingPoint.x + 1, y: startingPoint.y };
        if (downSign.x < height) {
            console.log();
            while (board[downSign.x][downSign.y]) {
                downSign.x += 1;
                inline++;
            }
        }
        inline = 1;

        const leftUpSign = { x: startingPoint.x - 1, y: startingPoint.y - 1 };
        if (upSign.x >= 0) {
            while (board[leftUpSign.x][leftUpSign.y]) {
                leftUpSign.x -= 1;
                leftUpSign.y -= 1;
                inline++;
            }
        }

        const rightDown = { x: startingPoint.x + 1, y: startingPoint.y + 1 };
        if (rightDown.x < height) {
            while (board[rightDown.x][rightDown.y]) {
                rightDown.x += 1;
                rightDown.y += 1;
                inline++;
            }
        }

        if (inline >= 5) {
            return true;
        }
        return false;
    };

    return (
        <div style={{ height: "100%" }}>
            {board &&
                board.map((row, rowIndex) => {
                    return (
                        <div
                            key={rowIndex}
                            style={{ display: "flex", flexDirection: "row" }}
                            onClick={() => console.log("verify")}
                        >
                            {row.map((column, columnIndex) => {
                                return (
                                    <Cell
                                        key={`${rowIndex}_${columnIndex}`}
                                        rowIndex={rowIndex}
                                        columnIndex={columnIndex}
                                        playerMove={playerMove}
                                        style={{ height: `${90 / height}vh`, width: `${100 / height}vh` }}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
}
