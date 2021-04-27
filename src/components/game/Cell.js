import React, { useState } from "react";

export default function Cell({ rowIndex, columnIndex, style, playerMove }) {
    const [row, setRow] = useState(rowIndex);
    const [column, setColumn] = useState(columnIndex);
    const [sign, setSign] = useState("");

    const placeSign = () => {
        if (!sign) {
            setSign("X");
            playerMove({ x: rowIndex, y: columnIndex });
        }
    };

    return (
        <div
            style={{ border: "1px solid #000", display: "grid", placeItems: "center", fontSize: "36px", ...style }}
            onClick={placeSign}
        >
            {sign}
        </div>
    );
}
