import React, { useState } from "react";

export default function Cell({ rowIndex, columnIndex, style, playerMove, playerSign }) {
    const [sign, setSign] = useState("");

    const placeSign = () => {
        if (!sign) {
            setSign(playerSign);
            playerMove({ x: rowIndex, y: columnIndex });
        }
    };

    return (
        <div style={{ border: "1px solid #000", display: "grid", placeItems: "center", ...style }} onClick={placeSign}>
            {sign}
        </div>
    );
}
